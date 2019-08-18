import React from 'react';
import styled from '../../styles/typed-components';
import TextInput from './TextInput';

interface IProps {
  title?: string;
  imgUrl?: string;
  keyword1?: string;
  keyword2?: string;
  onInputChange: any;
}

const StyledIconEditForm = styled.div`
  width: 100%;
  max-width: 860px;
  min-width: 576px;
  padding: 2rem;
  margin: auto;

  & > div {
    border: 1px solid lightgray;
    border-radius: 8px;
    -webkit-box-shadow: 0px 16px 52px -16px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 16px 52px -16px rgba(0,0,0,0.75);
    box-shadow: 0px 16px 52px -16px rgba(0,0,0,0.75);
  }

  form {
    display: flex;
    & > div {
      position: relative;
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
        padding: 2rem 2rem 2rem 0;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      flex: 1;
      li {
        flex: 1;
      }
    }
  }

  .buttons {
    text-align: center;
    padding: 2rem;
    button {
      font-size: 2rem;
      background-color: white;
      border-radius: 4px;
      padding: 1rem;
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
  const defaultImgUrl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAxMmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyczEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyLTEyIDUuMzczLTEyIDEyem0xOC0xaC00djdoLTR2LTdoLTRsNi02IDYgNnoiLz48L3N2Zz4="
  const { title="", imgUrl=defaultImgUrl, keyword1="", keyword2="", onInputChange } = props;
  return (
    <StyledIconEditForm>
      <div>
        <form>
          <div>
            <input type="file"/>
            <img src={imgUrl}/>
          </div>
          <ul>
            <li key="title">
              <TextInput onInputChange={onInputChange} name="title" value={title}/>
            </li>
            <li key="keyword1">
              <TextInput onInputChange={onInputChange} name="keyword1" value={keyword1}/>
            </li>
            <li key="keyword2">
              <TextInput onInputChange={onInputChange} name="keyword2" value={keyword2}/>
            </li>
          </ul>
        </form>
        <div className="buttons">
          <button>send</button>
          <button>cancel</button>
        </div>
      </div>
    </StyledIconEditForm>
  )
}

export default IconEditForm;