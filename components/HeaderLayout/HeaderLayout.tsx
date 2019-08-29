import React from 'react';
import Header from './Header';
import styled from '../../styles/typed-components';
import { SortMode } from '../../types';

interface IProps {
  search: string;
  children: React.ReactNode;
  onSearchChange: (search: string) => void;
  sortMode: SortMode;
  onToggleSortMode: () => void;
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  header {
    position: fixed;
    z-index: 10;
    transform: translateX(0);
    background-color: rgba(255, 255, 255, .95);
    width: 100%;
  }
  & > div {
    padding-top: 5rem;
  }
`;

const HeaderLayout = (props: IProps) => (
  <StyledLayout>
    <header>
      <Header 
        search={props.search} 
        onSearchChange={props.onSearchChange}
        sortMode={props.sortMode}
        onToggleSortMode={props.onToggleSortMode}
      />
    </header>
    <div>
      {props.children}
    </div>
  </StyledLayout>
);

export default HeaderLayout;