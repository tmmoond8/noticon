
import styled, { withProps } from '../../styles/typed-components';

interface IProps {
  isOpen?: boolean;
  onClick: any;
}

const StyledFloatingButton = withProps<IProps, HTMLParagraphElement>(styled.p)`
  position: fixed;
  width: 4rem;
  height: 4rem;
  left: 75vw;
  top: 65vh;
  background-color: white;
  border-radius: 50%;
  box-shadow: 2px 2px 3px rgba(0,0,0, .5);
  cursor: pointer;
  transform: ${props => props.isOpen ? 'scale(0) !important' : 'scale(1)'};
  transition: all .3s ease-out;
  
  &:hover {
    transform: scale(1.3);
  }

  &::before {
    position: absolute;
    content: "";
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1.5rem;
    height: 1.5rem;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMSAxMXYtMTFoMXYxMWgxMXYxaC0xMXYxMWgtMXYtMTFoLTExdi0xaDExeiIvPjwvc3ZnPg==");
    backgrournd-repeat: no-repeat;
    background-size: contain;
  }
`;

const FloatingButton = (props: IProps) => <StyledFloatingButton isOpen={props.isOpen} onClick={props.onClick}/>
export default FloatingButton;