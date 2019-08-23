import React from 'react';

import { upload } from '../../lib/imageUploader';
import IconEditForm from './IconEditForm';
import * as dataRequest from '../../lib/dataRequest';
import { Noticon } from '../../types';

interface IProps {
  isOpen?: boolean;
  onClickCancelBtn: any;
}
interface IState {
  title: string;
  imgUrl: string;
  keyword1: string;
  keyword2: string;
  id: string;
}

class IconEditFormContainer extends React.Component<IProps, IState> {
  state = {
    id: '',
    title: '',
    imgUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAxMmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyczEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyLTEyIDUuMzczLTEyIDEyem0xOC0xaC00djdoLTR2LTdoLTRsNi02IDYgNnoiLz48L3N2Zz4=',
    keyword1: '',
    keyword2: '',
  }
  render() {
    const { isOpen, onClickCancelBtn } = this.props;
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
        onClickCancelBtn={onClickCancelBtn}
        isOpen={isOpen}
      />
    )
  }

  handleInputChange = (event) => {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value
    } as any)
  }

  handleFileChange = async (event) => {
    event.preventDefault();
    const files = event.target.files;
    if (files.length < 1) return;
    const file = event.target.files[0];
    try {
      const { id, imgUrl } = await upload(file);
      this.setState({
        imgUrl,
        id
      });
    } catch (error) {
      // error handle
    }
  }

  handleSendIconForm = async (event) => {
    const noticon: Noticon = {
      ...this.state,
      keywords: `${this.state.keyword1},${this.state.keyword2}`
    }
    try {
      const result = await dataRequest.upload('logo', noticon);
      console.log(result);
    } catch (error) {
      // error handle
    }
  }
}

export default IconEditFormContainer;