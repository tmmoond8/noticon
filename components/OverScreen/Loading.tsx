import ReactLoading, { LoadingType } from 'react-loading';

interface IProps {
  type: LoadingType;
  color: string;
}


const Loading = (props: IProps) => <ReactLoading type={props.type} color={props.color}/>

export default Loading;