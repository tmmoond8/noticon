import React from 'react';
import { toast } from 'react-toastify';
import { inject, observer } from 'mobx-react';
import { upload } from '../../lib/imageUploader';
import IconEditForm from './IconEditForm';
import * as dataRequest from '../../lib/dataRequest';
import { Noticon } from '../../types';

interface IProps {
  isOpen?: boolean;
  onSetOpen: any;
  commonStore?: any;
}
interface IState {
  title: string;
  imgUrl: string;
  imgSrc: string;
  keyword1: string;
  keyword2: string;
  id: string;
}

@inject('commonStore')
@observer
class IconEditFormContainer extends React.Component<IProps, IState> {
  state = {
    id: '',
    title: '',
    imgUrl: '',
    imgSrc: '',
    keyword1: '',
    keyword2: '',
  }

  render() {
    const { isOpen, onSetOpen } = this.props;
    const { title, imgUrl, imgSrc, keyword1, keyword2 } = this.state;
    return (
      <IconEditForm 
        title={title}
        imgUrl={imgUrl}
        imgSrc={imgSrc}
        keyword1={keyword1}
        keyword2={keyword2}
        onChangeInput={this.handleChangeInput} 
        onChangeFile={this.handleChangeFile}
        onBlurImgSrc={this.handleBlurImgSrc}
        onClickSendBtn={this.handleSendIconForm}
        onClickCancelBtn={() => onSetOpen(false)}
        isOpen={isOpen}
      />
    )
  }

  handleChangeInput = (event) => {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value
    } as any)
  }

  handleChangeFile = async (event) => {
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
      this.setState({
        imgUrl: '',
      });
    }
  }

  handleBlurImgSrc = async (event) => {
    event.preventDefault();
    const imgSrc = event.target.value;
    if (imgSrc.length < 1) return;
    try {
      this.setState({
        imgUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAxMmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyczEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyLTEyIDUuMzczLTEyIDEyem0xOC0xaC00djdoLTR2LTdoLTRsNi02IDYgNnoiLz48L3N2Zz4='
      })
      const { id, imgUrl } = await upload(imgSrc);
      this.setState({
        imgUrl,
        id
      });
    } catch (error) {
      console.error(error);
      toast.error('failed to upload the icon');
    }
  }

  handleSendIconForm = async (event) => {
    const { onSetOpen, commonStore } = this.props;
    const { setLoading } = commonStore;
    const noticon: Noticon = {
      ...this.state,
      keywords: `${this.state.keyword1}‡${this.state.keyword2}`
    }
    try {
      setLoading({ type: "cylon"})
      const { data: { result, message } } = await dataRequest.append('logo', noticon);
      if (result !== 'success') {
        throw new Error(message);
      }
      commonStore.unshiftIcon({...noticon, date: new Date().getTime()});
      toast.success('added a new icon');
    } catch (error) {
      // error handle
      // toast.error('failed to upload the icon', error.message);
    }
    setLoading(null)
    onSetOpen(false);
    this.setState({
      id: '',
      title: '',
      imgUrl: '',
      imgSrc: '',
      keyword1: '',
      keyword2: '',
    });
  }
}

export default IconEditFormContainer;