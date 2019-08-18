import React from 'react';
import HeaderLayout from './HeaderLayout';

interface IProps {
  search: string;
  children: React.ReactNode;
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
}

class HeaderLayoutContainer extends React.Component<IProps> {
  render() {
    const { children, search, onSearchChange } = this.props;
    return (
      <HeaderLayout search={search} onSearchChange={onSearchChange}>
        {children}
      </HeaderLayout>
    )
  }
}

export default HeaderLayoutContainer;