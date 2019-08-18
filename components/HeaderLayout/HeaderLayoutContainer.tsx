import React from 'react';
import HeaderLayout from './HeaderLayout';
import { inject, observer } from 'mobx-react';
import CommonStore from '../../stores/CommonStore';

interface IProps {
  commonStore?: CommonStore;
  children: React.ReactNode;
}

@inject('commonStore')
@observer
class HeaderLayoutContainer extends React.Component<IProps> {
  render() {
    const { children, commonStore } = this.props;
    return (
      <HeaderLayout search={commonStore!.search} onSearchChange={commonStore!.setSearch}>
        {children}
      </HeaderLayout>
    )
  }
}

export default HeaderLayoutContainer;