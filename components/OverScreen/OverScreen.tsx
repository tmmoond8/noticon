import React from 'react';
import styled, { withProps } from '../../styles/typed-components';
import FloatingButton from './FloatingButton';
import Loading from './Loading';
import IconEditForm from '../IconEditForm';

const ScreenWrapper = withProps<{scrollTop}, HTMLDivElement>(styled.div)`
  position: absolute;
  top: ${props => props.scrollTop}px;
  height: 1px;
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

interface IProps {
  scrollTop: number;
  isOpenUploading: boolean;
  setOpenUploading: any;
  loading?: any;
}

const OverScreen = (props: IProps) => {
  const { scrollTop, isOpenUploading, setOpenUploading, loading } = props;
  return (
    <ScreenWrapper scrollTop={scrollTop}>
      <div>
        <FloatingButton isOpen={isOpenUploading} onClick={() => setOpenUploading(!isOpenUploading)}/>
        <IconEditForm isOpen={isOpenUploading} onSetOpen={setOpenUploading}/>
        {loading && <Loading type={loading.type} color={loading.color}/>}
      </div>
    </ScreenWrapper>
  )
}

export default OverScreen;