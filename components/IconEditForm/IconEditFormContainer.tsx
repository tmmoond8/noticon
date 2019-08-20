import React from 'react';

import IconEditForm from './IconEditForm';
import { post } from '../../lib/dataRequest';

interface IProps {}
interface IState {
  title: string;
  imgUrl: string;
  keyword1: string;
  keyword2: string;
}

class IconEditFormContainer extends React.Component<IProps, IState> {
  state = {
    title: '',
    imgUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAxMmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyczEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyLTEyIDUuMzczLTEyIDEyem0xOC0xaC00djdoLTR2LTdoLTRsNi02IDYgNnoiLz48L3N2Zz4=',
    keyword1: '',
    keyword2: '',
  }
  render() {
    const { title, imgUrl, keyword1, keyword2 } = this.state;
    return (
      <IconEditForm 
        title={title}
        imgUrl={imgUrl}
        keyword1={keyword1}
        keyword2={keyword2}
        onChangeInput={this.handleInputChange} 
        onChangeFile={this.handleFileChange}
        onClickSendBtn={this.handleSendIconForm}
      />
    )
  }

  handleInputChange = (event) => {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value
    } as any)
  }

  handleFileChange = (event) => {
    event.preventDefault();
    const files = event.target.files;
    if (files.length < 1) return;

    this.setState({
      imgUrl: URL.createObjectURL(event.target.files[0])
    });
  }

  handleSendIconForm = async (event) => {
    await post('logo');
  }
}

export default IconEditFormContainer;