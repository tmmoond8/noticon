import styled from '../../styles/typed-components';
import ReactLoading from 'react-loading';

interface IProps {
  isLoading: boolean;
}

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200, .9);
  & > div {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
  }
`;

const Loading = (props: IProps) => (
  <Wrapper>
    <ReactLoading type="cubes" color="#ffffff"/>
  </Wrapper>
)

export default Loading;