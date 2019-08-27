import React from 'react';
import Header from './Header';
import styled from '../../styles/typed-components';

interface IProps {
  search: string;
  children: React.ReactNode;
  onSearchChange: (search: string) => void;
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderLayout = (props: IProps) => (
  <StyledLayout>
    <header>
      <Header search={props.search} onSearchChange={props.onSearchChange}/>
    </header>
    <div>
      {props.children}
    </div>
  </StyledLayout>
);

export default HeaderLayout;