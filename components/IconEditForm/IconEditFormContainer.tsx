import React from 'react';
import { toast } from 'react-toastify';
import { inject, observer } from 'mobx-react';
import IconEditForm from './IconEditForm';
import * as dataRequest from '../../lib/dataRequest';
import { Noticon } from '../../types';
import { upload } from '../../lib/imageUploader';
import axios from 'axios';

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
  cropImage: File | null;
  id: string;
  isLoading: boolean;
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
    cropImage: null,
    isLoading: false,
  }
  
  render() {
    const { isOpen, onSetOpen } = this.props;
    const { title, imgUrl, imgSrc, keyword1, keyword2, cropImage, isLoading } = this.state;
    return (
      <IconEditForm 
        title={title}
        imgUrl={imgUrl}
        imgSrc={imgSrc}
        keyword1={keyword1}
        keyword2={keyword2}
        cropImage={cropImage}
        onChangeInput={this.handleChangeInput} 
        onChangeFile={this.handleChangeFile}
        onBlurImgSrc={this.handleBlurImgSrc}
        onClickSendBtn={this.handleSendIconForm}
        onClickCancelBtn={() => onSetOpen(false)}
        onChangeCropImage={this.handleChangeCropImage}
        isOpen={isOpen}
        isLoading={isLoading}
      />
    )
  }

  handleChangeCropImage = (crop: File) => {
    this.setState({
      cropImage: crop,
    } as any);
  }

  handleChangeInput = (event) => {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value
    } as any)
  }

  handleChangeFile = async (event) => {
    event.preventDefault();
    const fileElement = event.target;
    const files = fileElement.files;
    if (files.length < 1) return;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      fileElement.value = '';
      this.setState({
        imgUrl: reader!.result!.toString(),
      });
    };
    
    reader.onerror = function (error) {
      console.log('Error: ', error);
    }
  }

  handleBlurImgSrc = async (event) => {
    event.preventDefault();
    const imgSrc = event.target.value;
    if (imgSrc.length < 1) return;

    const { status, data } = await axios.get(imgSrc, { responseType:"blob" });
    
    if (status === 200 && 'size' in data) {
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onload = () => {
        this.setState({
          imgUrl: reader!.result!.toString(),
        })
      };
    }
  }

  handleSendIconForm = async (event) => {
    const { onSetOpen, commonStore } = this.props;
    const { cropImage } = this.state;
    const { setLoading } = commonStore;

    let id, imgUrl;
    setLoading({ type: "cylon"});
    this.setState({
      isLoading: true
    });
    try {
      const uploadResult = await upload(cropImage);
      id = uploadResult!.id;
      imgUrl = uploadResult!.imgUrl
    } catch (error) {
      // error handle
      setLoading(null)
      this.setState({
        isLoading: false
      });
      return;
    }
    const noticon: Noticon = {
      ...this.state,
      id,
      imgUrl,
      keywords: `${this.state.keyword1}‡${this.state.keyword2}`
    }
    try {
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
    
    this.setState({
      isLoading: false
    });
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