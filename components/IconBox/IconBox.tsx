import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import styled, { withProps } from '../../styles/typed-components';
import { keyframes } from 'styled-components';

interface IProps {
  imgUrl: string;
  title: string;
  visible: boolean;
}

const pop = keyframes`
  0% { transform: scale(0) }
  50% { transform: scale(.8) }
  100% { transform: scale(1) }
`;

const StyledIconBox = withProps<any, HTMLDivElement>(styled.div)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;

  img {
    display: ${props => props.visible ? 'inline-block' : 'none'};
    animation: ${pop} .6s ease-out;
    width: 60%;
    height: 60%;
  }

  span {
    display: none;
  }

  p {
    padding-top: 1rem;
    font-size: ${props => props.isLongText ? '1.0rem' : '1.5rem'};
    ${props => props.theme.media.tablet`
      font-size: 1.2rem;
    `}

    ${props => props.theme.media.phone`
      font-size: 1rem;
    `}
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

const isIOS = () => {
  const isClient = typeof window === 'object';
  if (!isClient) return false;
  return navigator.userAgent.match(/ipad|iphone/i);
}

const IconBox = (props: IProps) => {
  const { imgUrl, title, visible } = props;
  const refCopyText: React.RefObject<any> = useRef(null);
  const [copyText, setCopyText] = useState('COPY');

  const handleCopy = (event) => {
    if (isIOS()) {
      const range = document.createRange();
      range.selectNodeContents(refCopyText.current);
      const selection = window.getSelection();
      selection!.removeAllRanges();
      selection!.addRange(range);
      refCopyText.current.setSelectionRange(0, 999999);
    } else {
      refCopyText.current.select();
    }
    document.execCommand('copy');
    toast.success(`${title} copied`)
    setCopyText('COPIED');
  }
  return (
    <StyledIconBox isLongText={title.length > 14} visible={visible}>
      <div>
        <textarea 
          ref={refCopyText} 
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
        onMouseLeave={() => setCopyText('COPY')}
      >{copyText}</div>
    </StyledIconBox>
  )

}

export default IconBox;