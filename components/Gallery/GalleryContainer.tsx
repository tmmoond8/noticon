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