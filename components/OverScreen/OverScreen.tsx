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
        <IconEditForm isOpen={isOpenUploading} onSetOpen={setOpenUploading}/>
        {loading && <Loading type={loading.type} color={loading.color}/>}
      </div>
    </ScreenWrapper>
  )
}

export default OverScreen;