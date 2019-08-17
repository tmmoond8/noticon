import React, { useRef } from 'react';
import styled from '../../styles/typed-components';

interface IProps {
  imgUrl: string;
  title: string;
}

const StyledIconBox = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 15rem;
  text-align: center;

  img {
    width: 120px;
    height: 120px;
  }

  span {
    display: none;
  }

  p {
    padding-top: 1rem;
    font-size: 1.5rem;
  }

  &:hover > .copy {
    transform: translateX(0);
  }

  .invisible {
    position: absolute;
    transform: translateX(-9999px);
  }

  .copy {
    display: flex;
    transform: translateX(-9999px);
    justify-content: center;
    align-items: center;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    font-size: 2rem;
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }
`;

const IconBox = (props: IProps) => {
  const { imgUrl, title } = props;
  const copyTextRef: React.RefObject<any> = useRef(null);

  const handleCopy = (event) => {
    copyTextRef.current.select();
    document.execCommand('copy');
  }
  return (
    <StyledIconBox>
      <div>
        <textarea 
          ref={copyTextRef} 
          value={imgUrl} 
          readOnly={true}
          className="invisible"
        />
        <img src={imgUrl}/>
        <p>{title}</p>
      </div>
      <div 
        className="copy"
        onClick={handleCopy}
      >COPY</div>
    </StyledIconBox>
  )

}

export default IconBox;