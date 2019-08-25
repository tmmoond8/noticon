import React from 'react';

import { upload } from '../../lib/imageUploader';
import IconEditForm from './IconEditForm';
import * as dataRequest from '../../lib/dataRequest';
import { Noticon } from '../../types';

interface IProps {
  isOpen?: boolean;
  onSetOpen: any;
}
interface IState {
  title: string;
  imgUrl: string;
  imgSrc: string;
  keyword1: string;
  keyword2: string;
  id: string;
}

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
    }
  }

  handleBlurImgSrc = async (event) => {
    event.preventDefault();
    const imgSrc = event.target.value;
    if (imgSrc.length < 1) return;
    try {
      const { id, imgUrl } = await upload(imgSrc);
      this.setState({
        imgUrl,
        id
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleSendIconForm = async (event) => {
    const { onSetOpen } = this.props;
    const noticon: Noticon = {
      ...this.state,
      keywords: `${this.state.keyword1}‡${this.state.keyword2}`
    }
    try {
      await dataRequest.append('logo', noticon);
    } catch (error) {
      // error handle
    }
    onSetOpen(false);
  }
}

export default IconEditFormContainer;