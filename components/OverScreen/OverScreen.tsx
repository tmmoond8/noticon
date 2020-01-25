import React from 'react';
import styled from '../../styles/typed-components';
import FloatingButton from './FloatingButton';
import Loading from './Loading';
import IconEditForm from '../IconEditForm';

const ScreenWrapper = styled.div`
  position: fixed;
  top: 0;
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
    margin-top: 4.7rem;
  }
`;

const DimmedLayer = styled.div<{isShow: boolean}>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: ${p => p.isShow ? '0' : '-100%'};
  background-color: rgba(240, 240, 240, .9);
  & > div {
    position: absolute;
    right: 0;
    top: 4rem;
    left: 0;
    bottom: 4rem;
    margin: auto;
  }
`;

interface IProps {
  isOpenUploading: boolean;
  setOpenUploading: any;
  loading?: any;
}

const OverScreen = (props: IProps) => {
  const { isOpenUploading, setOpenUploading, loading } = props;
  return (
    <ScreenWrapper>
      <div>
        <FloatingButton isOpen={isOpenUploading} onClick={() => setOpenUploading(!isOpenUploading)}/>
        <DimmedLayer isShow={isOpenUploading || loading}>
          <IconEditForm isOpen={isOpenUploading} onSetOpen={setOpenUploading}/>
          {loading && <Loading type={loading.type} color={loading.color}/>}
        </DimmedLayer>
      </div>
    </ScreenWrapper>
  )
}

export default OverScreen;