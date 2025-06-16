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
import APIS from '../../apis';

interface IconBoxProps extends Noticon {}

export default function IconBox(props: IconBoxProps) {
  const { title, imgUrl, uuid, keywords, date } = props;
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
    APIS.FireBase.increaseClickCount(uuid);
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
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <ImageBox>
        <LazyLoadImage className="LazyLoadImage" alt={title} src={imgUrl} />
        <PlaceholderImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAQMAAACXljzdAAAAA1BMVEVHcEyC+tLSAAAAAXRSTlMAQObYZgAAABxJREFUWMPtwYEAAAAAw6D5U1/hAFUBAAAAAHwGFFAAAQCfIxUAAAAASUVORK5CYII=" />
      </ImageBox>

      <Content.Text as="P">{title}</Content.Text>
      {isHover && <Message>{message}</Message>}
    </IconWrapper>
  );
}

const IconWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: none;
  overflow: hidden;
  cursor: pointer;

  .LazyLoadImage {
    position: absolute;
    width: 50%;
    height: auto;
  }
`;

const ImageBox = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  margin: 32px 0 8px 0;
  text-align: center;
`;

const PlaceholderImage = styled.img`
  width: 50%;
  height: auto;
`;

const Message = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  background-color: rgba(100, 100, 100, 0.7);
  font-size: 18px;
  font-weight: 400;
`;
