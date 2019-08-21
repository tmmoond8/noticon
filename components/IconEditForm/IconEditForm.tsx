import React from 'react';
import styled from '../../styles/typed-components';
import TextInput from './TextInput';

interface IProps {
  title: string;
  imgUrl: string;
  keyword1: string;
  keyword2: string;
  onChangeInput: any;
  onChangeFile: any;
  onClickSendBtn: any;
}

const StyledIconEditForm = styled.div`
  width: 100%;
  max-width: 660px;
  padding: 2rem;
  margin: auto;
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

  form {
    display: flex;
    & > div {
      position: relative;
      ${props => props.theme.media.tablet`
        width: 186px;
        height: 186px;
      `}
      width: 240px;
      height: 240px;
      & > * {
        position: absolute;
        width: inherit;
        height: inherit;
      }

      & > input {
        z-index: 10;
        opacity: 0;
      }
      & > img {
        ${props => props.theme.media.tablet`
          padding: 1.5rem;
        `}
        padding: 3rem;
        object-fit: contain;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding-right: 2rem;
      li {
        flex: 1;
      }
    }
  }

  .buttons {
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

    button + button {
      margin-left: 1rem;
    }
  }
`;


const IconEditForm = (props: IProps) => {
  const { 
    title, 
    imgUrl, 
    keyword1, 
    keyword2, 
    onChangeInput, 
    onChangeFile, 
    onClickSendBtn,
  } = props;
  return (
    <StyledIconEditForm>
      <div>
        <form>
          <div>
            <input type="file" name="file" onChange={onChangeFile}/>
            <img src={imgUrl}/>
          </div>
          <ul>
            <li key="title">
              <TextInput onChangeInput={onChangeInput} name="title" value={title}/>
            </li>
            <li key="keyword1">
              <TextInput onChangeInput={onChangeInput} name="keyword1" value={keyword1}/>
            </li>
            <li key="keyword2">
              <TextInput onChangeInput={onChangeInput} name="keyword2" value={keyword2}/>
            </li>
          </ul>
        </form>
        <div className="buttons">
          <button onClick={onClickSendBtn}>send</button>
          <button>cancel</button>
        </div>
      </div>
    </StyledIconEditForm>
  )
}

export default IconEditForm;