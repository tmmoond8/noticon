import React from 'react';
import styled, { withProps } from '../../styles/typed-components';

interface IProps {
  name: string;
  value: string;
  onInputChange: any;
}

const StyledTextInput = withProps<any, HTMLDivElement>(styled.div)`
  position: relative;
  label {
    position: absolute;
    left: 0;
    font-size: 2rem;
    user-select: none;
    transform: ${props => props.isEmpty ? 'translateY(1.5rem)' : 'translateY(0.5rem)'};
    font-size: ${props => props.isEmpty ? '2rem' : '1rem'};
    transition: all .3s;
    color: gray;
    ${props => props.theme.media.tablet`
      font-size: ${props => props.isEmpty ? '1.5rem' : '.8rem'};
    `}
  }

  input {
    display: inline-block;
    width: 100%;
    font-size: 1.6rem;
    padding: 2rem 0 1rem 0;
    border-bottom: 1px solid lightgray;
    &:focus {
      border-bottom: 2px solid black;
    }

    &:focus + label {
      transform: translateY(.5rem);
      font-size: 1rem;
    }
  }
`;



const TextInput = (props: IProps) => {
  return (
    <StyledTextInput isEmpty={props.value.length === 0}>
      <input type="text" id={props.name} name={props.name} value={props.value} onBlur={(e) => console.log(e.target)}/>
      <label htmlFor={props.name}>{props.name}</label>
    </StyledTextInput>
  )
}

export default TextInput;