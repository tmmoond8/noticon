import React from 'react';
import HeaderLayout from './HeaderLayout';

interface IProps {
  children: React.ReactNode;
}

class HeaderLayoutContainer extends React.Component<IProps> {
  render() {
    const { children } = this.props;
    return (
      <HeaderLayout onSearchChange={this.handleInputChange}>
        {children}
      </HeaderLayout>
    )
  }

  handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log('abc');
  }
}

export default HeaderLayoutContainer;