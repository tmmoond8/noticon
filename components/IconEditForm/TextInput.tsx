import React from 'react';
import styled, { withProps } from '../../styles/typed-components';

interface IProps {
  name: string;
  value: string;
  onChangeInput: any;
  onBlurImgSrc?: any;
  maxLength?: number;
}

const StyledTextInput = withProps<any, HTMLDivElement>(styled.div)`
  position: relative;
  label {
    position: absolute;
    left: 0;
    font-size: 1.4rem;
    user-select: none;
    transform: ${props => props.isEmpty ? 'translateY(1.5rem)' : 'translateY(0.5rem)'};
    font-size: ${props => props.isEmpty ? '1.4rem' : '1rem'};
    transition: all .3s;
    color: gray;
    ${props => props.theme.media.tablet`
      font-size: ${props => props.isEmpty ? '1.2rem' : '.8rem'};
    `}
    ${props => props.theme.media.phone`
      font-size: ${props => props.isEmpty ? '1rem' : '.7rem'};
    `}
  }

  input {
    ${props => props.theme.media.tablet`
      font-size: 1.2rem;
    `}
    ${props => props.theme.media.phone`
      font-size: 1rem;
    `}
    display: inline-block;
    width: 100%;
    font-size: 1.4rem;
    padding: 2rem 0 1rem 0;
    border-bottom: 1px solid lightgray;
    &:focus {
      border-bottom: 2px solid black;
    }

    &:focus + label {
      transform: translateY(.5rem);
      font-size: 1rem;
      ${props => props.theme.media.tablet`
        font-size: .8rem;
      `}
      ${props => props.theme.media.phone`
        font-size: .7rem;
      `}
    }
  }
`;

const TextInput = (props: IProps) => {
  const {
    name,
    value,
    onChangeInput,
    onBlurImgSrc=() => "",
    maxLength
  } = props;
  return (
    <StyledTextInput isEmpty={props.value.length === 0}>
      <input 
        type="text" 
        id={name} 
        name={name} 
        value={value} 
        onChange={onChangeInput}
        onBlur={onBlurImgSrc}
        maxLength={maxLength}
        />
      <label htmlFor={props.name}>{props.name}</label>
    </StyledTextInput>
  )
}

export default TextInput;