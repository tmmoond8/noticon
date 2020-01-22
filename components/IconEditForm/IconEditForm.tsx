import React, { useState, useEffect, useRef } from 'react';
import TextInput from './TextInput';
import styled, { withProps } from '../../styles/typed-components';
import Switch from '../Switch';

interface IProps {
  isOpen?: boolean;
  title: string;
  imgUrl: string;
  imgSrc: string;
  keyword1: string;
  keyword2: string;
  onChangeInput: (e) => void;
  onChangeFile: (e) => void;
  onBlurImgSrc: (e) => void;
  onClickSendBtn: (e) => void;
  onClickCancelBtn: () => void;
}

const StyledIconEditForm = withProps<IProps, HTMLDivElement>(styled.div)`
  width: 100%;
  max-width: 520px;
  padding: 2rem;
  margin: auto;
  transition: all .3s ease-out;
  transform: translateY(${props => props.isOpen ? '0' : '-250%'});
  ${props => props.theme.media.tablet`
    padding: 1rem;
  `};

  & > div {
    border: 1px solid lightgray;
    border-radius: 8px;
    -webkit-box-shadow: 0px 16px 52px -16px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 16px 52px -16px rgba(0,0,0,0.75);
    box-shadow: 0px 16px 52px -16px rgba(0,0,0,0.75);
    background-color: white;
    transform: translate(0);
  }

  .footer {
    text-align: center;
    padding: 2rem;
  }
`;

const FormBody = styled.form`
  display: flex;
  align-items: center;

  & > div {
    position: relative;
    width: 240px;
    height: 240px;
    ${props => props.theme.media.tablet`
      width: 186px;
      height: 186px;
    `}
    ${props => props.theme.media.phone`
      width: 128px;
      height: 128px;
    `}
    
    & > div {
      margin: 2rem auto 0 auto;
    }

    & > img {
      position: absolute;
      width: -webkit-fill-available;
      margin: 2rem 3rem;
      object-fit: contain;
    }

    & > input {
      z-index: 10;
      opacity: 0;
    }
  }

  ul {
    display: flex;
    max-height: 160px;
    flex-direction: column;
    flex: 1;
    padding: 1.5rem 1.5rem 0 0;

    li {
      display: flex;
      flex: 1;
      * + * {
        margin-left: 1rem;
      }
    }
    li + li {
      margin-top: 1rem;
    }
  }
`;

const ImageUploadButton = styled.label`
  display: block;
  width:  10rem;
  border-radius: 3px;
  text-align: center;
  padding: .5rem;
  cursor: pointer;

  background-color: rgb(46, 170, 220);
  color: white;

  &:hover, &:active {
    background-color: rgb(6, 156, 205);
  }

  input {
    width: 0;
  }
`;

const StyledButton = styled.button`
  font-size: 1.2rem;
  background-color: white;
  border-radius: 3px;
  padding: .5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;

  background-color: rgb(46, 170, 220);
  color: white;

  &:hover, &:active {
    background-color: rgb(6, 156, 205);
  }

  &.disabled {
    background-color: #eeeeee;
    color: #bbb;
    pointer-events: none;
  }
  & + button {
    margin-left: 1rem;
  }
`;

const CancelButton = styled(StyledButton)`
  background-color: rgb(46, 170, 220);
  color: white;

  &:hover, &:active {
    background-color: rgb(6, 156, 205);
  }
`

const IconEditForm = (props: IProps) => {
  const { 
    title, 
    imgUrl, 
    imgSrc,
    keyword1, 
    keyword2, 
    onChangeInput, 
    onChangeFile, 
    onBlurImgSrc,
    onClickSendBtn,
    isOpen,
    onClickCancelBtn,
  } = props;

  const [isURLUpload, toggleUploadMode ] = useState(true);
  const isUploadable = title.length !== 0 && imgUrl.length !== 0 && !imgUrl.startsWith("data:image/svg+xml;base64");
  const urlRef: any = useRef(null);

  useEffect(() => {
    if (isOpen) {
      urlRef.current.firstChild.focus();
    }
  }, [isOpen])

  return (
    <StyledIconEditForm role="icon-edit-form" isOpen={isOpen}>
      <div>
        <FormBody>
          <div>
            <Switch 
              isTrue={isURLUpload} 
              trueText="URL" 
              falseText="PC" 
              onToggle={() => toggleUploadMode(!isURLUpload)}
              style={{ width: "8rem"}}
            />
            <img src={imgUrl} alt=""/>
          </div>
          <ul>
            <li key="file" ref={urlRef}>
              {isURLUpload ? (
                <TextInput 
                  onChangeInput={onChangeInput} 
                  onBlurImgSrc={onBlurImgSrc} 
                  name="imgSrc" 
                  value={imgSrc}
                  placeHolder='paste in http://'
                />)
              : (
                <ImageUploadButton htmlFor="local_file">
                  pc file
                  <input id="local_file" type="file" name="file" onChange={onChangeFile}/>
                </ImageUploadButton>
              )}
            </li>
            <li key="title">
              <TextInput 
                onChangeInput={onChangeInput} 
                name="title" 
                value={title} 
                maxLength={20}
                placeHolder='title'
              />
            </li>
            <li key="keyword">
              <TextInput 
                onChangeInput={onChangeInput} 
                name="keyword1" 
                value={keyword1} 
                maxLength={12}
                placeHolder='tag'
              />
              <TextInput 
                onChangeInput={onChangeInput} 
                name="keyword2" 
                value={keyword2} 
                maxLength={12}
                placeHolder='another tag'
              />
            </li>
          </ul>
        </FormBody>
        <div className="footer">
          <StyledButton className={isUploadable ? '' : 'disabled'} onClick={onClickSendBtn}>Upload new icon</StyledButton>
          <CancelButton onClick={onClickCancelBtn}>cancel</CancelButton>
        </div>
      </div>
    </StyledIconEditForm>
  )
}

export default IconEditForm;