import styled from '../../styles/typed-components';

interface IProps {
  isTrue: boolean;
  trueText: string;
  falseText: string;
  onToggle: any;
  style?: object;
}

const Wrapper = styled.div<{ isTrue: boolean }>`
  display: flex;
  position: relative;
  min-width: 7rem;
  height: 2rem;
  width: 10rem;
  text-align: center;
  background-color: #f1f1f1;
  border-radius: 5px;
  font-size: .8rem;
  margin: auto 0px auto auto;
  cursor: pointer;
  
  & > * {
    line-height: 2rem;
  }

  div[role='left'] {
    flex: 1;
    color: ${props => props.isTrue ? '#ffffff' : '#bbbbbb'} ;
    z-index: 10;
  }

  div[role='right'] {
    flex: 1;
    color: ${props => !props.isTrue ? '#ffffff' : '#bbbbbb'} ;
    z-index: 10;
  }

  div[role='bar'] {
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: #555555;
    transition: all .3s ease-out;
    transform: translateX(${props => props.isTrue ? '0' : '100%'});
    border-radius: ${props => props.isTrue ? '6px 0 0 6px' : '0 6px 6px 0'};
  }
`;

const Switch = (props: IProps) => {
  const { isTrue, trueText, falseText, onToggle } = props;
  return (
    <Wrapper isTrue={isTrue} onClick={onToggle}>
      <div role="left">{trueText}</div>
      <div role="right">{falseText}</div>
      <div role="bar"/>
    </Wrapper>
  )
}

export default Switch;