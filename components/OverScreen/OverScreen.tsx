import React, { useState, useEffect } from 'react';
import styled, { withProps } from '../../styles/typed-components';

import FloatingButton from './FloatingButton';
import IconEditForm from '../IconEditForm';


const ScreenWrapper = withProps<{scrollTop}, HTMLDivElement>(styled.div)`
  position: absolute;
  top: ${props => props.scrollTop}px;
  width: 100%;
  & > div {
    position: relative;
    height: 1px;
  }

  .floating-button {
    left: 100px;
  }

  .icon-edit-form {
    margin-top: 6rem;
  }
`;

const handleScroll = (setSticky) => {
  const isClient = typeof window === 'object';
  useEffect(() => {
    if (!isClient) {
      return;
    }

    window.addEventListener('scroll', () => {
      console.log(window.scrollY)
      setSticky(window.scrollY);
    })
  })
}

interface IProps {}

const OverScreen = (props: IProps) => {
  const [isOpen, setOpen ] = useState(false);
  const [scrollTop, setScrollTop ] = useState(0);
  handleScroll(setScrollTop);
  return (
    <ScreenWrapper scrollTop={scrollTop}>
      <div>
        <FloatingButton isOpen={isOpen} onClick={() => setOpen(!isOpen)}/>
        <IconEditForm isOpen={isOpen} onSetOpen={setOpen}/>
      </div>
    </ScreenWrapper>
  )
}

export default OverScreen;