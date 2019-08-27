import styled, { withProps } from '../../styles/typed-components';

interface IProps {
  isURL: boolean;
  toggleMode: any;
}

const Wrapper = withProps<any, HTMLDivElement>(styled.div)`
  display: flex;
  position: relative;
  width: 7rem;
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
    color: ${props => props.isURL ? '#ffffff' : '#bbbbbb'} ;
    z-index: 10;
  }

  .right {
    flex: 1;
    color: ${props => !props.isURL ? '#ffffff' : '#bbbbbb'} ;
    z-index: 10;
  }

  .bar {
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: #555555;
    transition: all .3s ease-out;
    transform: translateX(${props => props.isURL ? '0' : '100%'});
    border-radius: ${props => props.isURL ? '6px 0 0 6px' : '0 6px 6px 0'};
  }
`;

const UploadModeSwtich = (props: IProps) => {
  const { isURL, toggleMode } = props;
  return (
    <Wrapper isURL={isURL}>
      <div className="left" onClick={() => toggleMode(true)}>URL</div>
      <div className="right" onClick={() => toggleMode(false)}>PC</div>
      <div className="bar"/>
    </Wrapper>
  )
}

export default UploadModeSwtich;