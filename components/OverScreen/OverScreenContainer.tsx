import React from 'react';
import { inject, observer } from 'mobx-react';
import OverScreen from './OverScreen';
import CommonStore from '../../stores/CommonStore';

interface IProps {
  commonStore?: CommonStore;
}

interface IState {
  isOpenUploading: boolean;
}

@inject('commonStore')
@observer
class OverScreenContainer extends React.Component<IProps, IState> {
  state = {
    isOpenUploading: false,
  }

  render() {
    const { loading } = this.props.commonStore!;
    const { isOpenUploading } = this.state;
    return (
      <OverScreen 
        isOpenUploading={isOpenUploading}
        setOpenUploading={this.handleSetOpenUploading}
        loading={loading}
      />
    )
  }

  handleSetOpenUploading = (isOpenUploading: boolean) => {
    this.setState({
      isOpenUploading
    })
  }
}

export default OverScreenContainer;