/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Content } from 'notion-ui';
import { useState, useCallback, useRef, RefObject } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Noticon } from '../../types';
import { copyText } from '../../libs/utils';

interface IconBoxProps extends Noticon {}

export default function IconBox(props: IconBoxProps) {
  const { title, imgUrl } = props;
  const [message, setMessage] = useState('COPY');
  const [isHover, setIsHover] = useState(false);
  const hiddenTextareaRef = useRef<HTMLTextAreaElement>();

  const handleClick = useCallback(() => {
    copyText(hiddenTextareaRef.current as HTMLTextAreaElement);
    setMessage('COPIED');
  }, [setMessage]);

  const handleMouseEnter = useCallback(() => {
    setIsHover(true);
  }, [setIsHover]);

  const handleMouseLeave = useCallback(() => {
    setIsHover(false);
    setMessage('COPY');
  }, [setIsHover, setMessage]);

  return (
    <IconWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <LazyLoadImage alt={title} src={imgUrl} />

      <Content.Text as="P">{title}</Content.Text>
      {isHover && <Message>{message}</Message>}
      <HiddenTextarea
        ref={hiddenTextareaRef as RefObject<HTMLTextAreaElement>}
        value={imgUrl}
        readOnly={true}
      />
    </IconWrapper>
  );
}

const IconWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  cursor: pointer;

  & > img {
    width: 60%;
    height: 60%;
    margin: 12px 0 0 0;
  }
`;

const Message = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(100, 100, 100, 0.7);
  font-size: 32px;
`;

const HiddenTextarea = styled.textarea`
  position: absolute;
  left: -9999px;
`;
