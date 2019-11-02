import React from 'react';
import styled, { withProps } from '../../styles/typed-components';

interface IProps {
  name: string;
  value: string;
  onChangeInput: (e) => void;
  onBlurImgSrc?: (e) => void;
  maxLength?: number;
  placeHolder: string;
}

const StyledTextInput = withProps<any, HTMLDivElement>(styled.input)`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  padding: 3px 6px;
  position: relative;
  border-radius: 3px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 1px inset;
  background: rgba(242, 241, 238, 0.6);
  cursor: text;
  height: 28px;
`;

const TextInput = (props: IProps) => {
  const {
    name,
    value,
    onChangeInput,
    onBlurImgSrc=() => "",
    maxLength,
    placeHolder,
  } = props;
  return (
    <StyledTextInput 
      type="text" 
      id={name} 
      name={name} 
      value={value} 
      onChange={onChangeInput}
      onBlur={onBlurImgSrc}
      maxLength={maxLength}
      placeholder={placeHolder}
    ></StyledTextInput>
  )
}

export default TextInput;