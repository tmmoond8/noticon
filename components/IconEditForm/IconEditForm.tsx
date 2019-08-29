import React, { useState } from 'react';
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
  onChangeInput: any;
  onChangeFile: any;
  onBlurImgSrc: any;
  onClickSendBtn: any;
  onClickCancelBtn: any;
}

const StyledIconEditForm = withProps<IProps, HTMLDivElement>(styled.div)`
  width: 100%;
  max-width: 660px;
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
`;

const FormBody = styled.form`
  display: flex;
  & > div {
    position: relative;
    ${props => props.theme.media.tablet`
      width: 186px;
      height: 186px;
    `}
    ${props => props.theme.media.phone`
      width: 128px;
      height: 128px;
    `}
    width: 240px;
    height: 240px;
    
    & > div {
      margin: 2rem auto 0 auto;
    }

    & > img {
      position: absolute;
      width: inherit;
      height: inherit;
      padding: 1rem 3rem 2rem 3rem;
      object-fit: contain;
    }

    & > input {
      z-index: 10;
      opacity: 0;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    flex: 1;

    li {
      display: flex;
      flex: 1;
      div {
        flex: 1;
        margin-right: 2rem;
      }
    }
  }
`;

const ImageUploadButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  border: 1px solid #bbbbbb;
  border-radius: 4px;
  margin: auto 2rem auto 0;
  font-size: 1.4rem;
  background-color: white;
  padding: .5rem;
  cursor: pointer;

  &:hover, &:active {
    background-color: black;
    color: white;
  }
  
  input {
    width: 0;
  }
`;

const FormFooter = styled.div`
  text-align: center;
  padding: 2rem;
  button {
    font-size: 1.4rem;
    background-color: white;
    border-radius: 4px;
    padding: .5rem;
    outline: none;
    cursor: pointer;

    &:hover, &:active {
      background-color: black;
      color: white;
    }
  }

  .disabled {
    background-color: #fafafa;
    color: #bbb;
    pointer-events: none;
  }

  button + button {
    margin-left: 1rem;
  }
`;

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
    onClickCancelBtn,
    isOpen,
  } = props;

  const [isURLUpload, toggleUploadMode ] = useState(true);

  const isUploadable = title.length !== 0 && imgUrl.length !== 0;
  
  return (
    <StyledIconEditForm className="icon-edit-form" isOpen={isOpen}>
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
            <li key="file">
              {isURLUpload ? (<TextInput onChangeInput={onChangeInput} onBlurImgSrc={onBlurImgSrc} name="imgSrc" value={imgSrc}/>)
              : (
                <ImageUploadButton htmlFor="local_file">
                  pc file
                  <input id="local_file" type="file" name="file" onChange={onChangeFile}/>
                </ImageUploadButton>
              )}
            </li>
            <li key="title">
              <TextInput onChangeInput={onChangeInput} name="title" value={title}/>
            </li>
            <li key="keyword">
              <TextInput onChangeInput={onChangeInput} name="keyword1" value={keyword1}/>
              <TextInput onChangeInput={onChangeInput} name="keyword2" value={keyword2}/>
            </li>
          </ul>
        </FormBody>
        <FormFooter>
          <button className={isUploadable ? '' : 'disabled'} onClick={onClickSendBtn}>send</button>
          <button onClick={onClickCancelBtn}>cancel</button>
        </FormFooter>
      </div>
    </StyledIconEditForm>
  )
}

export default IconEditForm;