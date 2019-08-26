import styled from '../../styles/typed-components';
import ReactLoading, { LoadingType } from 'react-loading';

interface IProps {
  type: LoadingType;
  color: string;
}

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(240, 240, 240, .9);
  & > div {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 2rem;
    margin: auto;
  }
`;

const Loading = (props: IProps) => (
  <Wrapper>
    <ReactLoading type={props.type} color={props.color}/>
  </Wrapper>
)

export default Loading;