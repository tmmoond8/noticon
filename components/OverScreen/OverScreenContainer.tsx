import React from 'react';
import { inject, observer } from 'mobx-react';
import OverScreen from './OverScreen';
import CommonStore from '../../stores/CommonStore';

interface IProps {
  commonStore?: CommonStore;
}

interface IState {
  scrollTop: number;
  isOpenUploading: boolean;
}

@inject('commonStore')
@observer
class OverScreenContainer extends React.Component<IProps, IState> {
  state = {
    scrollTop: 0,
    isOpenUploading: false,
  }

  componentDidMount = () => {
    const isClient = typeof window === 'object';
    if (!isClient) return;
    window.addEventListener('scroll', () => {
      this.setState({
        scrollTop: window.scrollY
      })
    })
  }

  render() {
    const { loading } = this.props.commonStore!;
    const { scrollTop, isOpenUploading } = this.state;
    return (
      <OverScreen 
        scrollTop={scrollTop}
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