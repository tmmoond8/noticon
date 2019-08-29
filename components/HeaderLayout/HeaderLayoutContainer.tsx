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
    const { search, setSearch, sortMode, toggleSortMode, setLoading } = commonStore!;
    return (
      <HeaderLayout 
        search={search} 
        onSearchChange={setSearch}
        sortMode={sortMode}
        onToggleSortMode={toggleSortMode}
        onSetLoading={setLoading}
      >
        {children}
      </HeaderLayout>
    )
  }
}

export default HeaderLayoutContainer;