import React from 'react';
import { inject, observer } from 'mobx-react';
import Gallery from './Gallery';
import withSizes from '../../lib/withSizes';
import CommonStore from '../../stores/CommonStore';

interface IProps {
  commonStore: CommonStore;
  device: 'desktop' | 'tablet' | 'phone' | 'ssr';
}

@inject('commonStore')
@observer
class GalleryContainer extends React.Component<IProps> {

  componentDidMount = () => {
    const isClient = typeof window === 'object';
    if (!isClient) return;
    const { iconScaleOut } = this.props.commonStore;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY + window.innerHeight;
      if (document.body.scrollHeight - currentScroll < 80) {
        iconScaleOut();
      }
    })
  }

  render() {
    const { device="ssr", commonStore } = this.props;
    const { iconList, hitIconSet } = commonStore;

    return (
      <Gallery 
        iconList={iconList}
        hitIconList={hitIconSet}
        device={device}
      />
    )
  }
}

export default withSizes(GalleryContainer as any);