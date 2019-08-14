import styled from '../../styles/typed-components';
const StyledP = styled.p`
  color: ${props => props.theme.color.deepViolet};
`;


interface IProps {
  text?: string;
}

const Test = (props: IProps) => (<StyledP>🐶{props.text}🦄🐔</StyledP>)

export default Test;