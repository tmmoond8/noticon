import styled, { withProps } from '../../styles/typed-components';

interface IProps {
  isTrue: boolean;
  trueText: string;
  falseText: string;
  onToggleMode: any;
  style?: object;
}

const Wrapper = withProps<any, HTMLDivElement>(styled.div)`
  display: flex;
  position: relative;
  min-width: 7rem;
  height: 2rem;
  text-align: center;
  background-color: #f1f1f1;
  border-radius: 5px;
  font-size: .8rem;
  cursor: pointer;
  
  & > * {
    line-height: 2rem;
  }

  .left {
    flex: 1;
    color: ${props => props.isTrue ? '#ffffff' : '#bbbbbb'} ;
    z-index: 10;
  }

  .right {
    flex: 1;
    color: ${props => !props.isTrue ? '#ffffff' : '#bbbbbb'} ;
    z-index: 10;
  }

  .bar {
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
  const { isTrue, trueText, falseText, onToggleMode, style } = props;
  return (
    <Wrapper isTrue={isTrue} onClick={onToggleMode} style={style}>
      <div className="left">{trueText}</div>
      <div className="right">{falseText}</div>
      <div className="bar"/>
    </Wrapper>
  )
}

export default Switch;