/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Content } from 'notion-ui';
import { useState, useCallback } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Storage from '../../libs/browserStorage';
import { Noticon } from '../../types';
import { copyText } from '../../libs/utils';
import { useStore } from '../../stores';

interface IconBoxProps extends Noticon {}

export default function IconBox(props: IconBoxProps) {
  const { title, imgUrl, id, keywords, date } = props;
  const {
    icon: { pushRecentUsedIcon },
  } = useStore();
  const [message, setMessage] = useState('COPY');
  const [isHover, setIsHover] = useState(false);

  const handleClick = useCallback(() => {
    const noticon: Noticon = props;
    const recentUsedIcons = pushRecentUsedIcon(noticon);
    Storage.recentUsedIcons.set(recentUsedIcons);
    copyText(noticon.imgUrl);
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
