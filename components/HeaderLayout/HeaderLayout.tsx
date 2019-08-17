import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import styled from '../../styles/typed-components';

interface IProps {
  children: React.ReactNode;
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
}

const StyledLayout = styled.div`
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div:nth-child(1) {
      width: 7rem;
    }
    div:nth-child(2) {
      max-width: 20rem;
    }
    ${props => props.theme.media.tablet`
      display: block;
      div:nth-child(2) {
        max-width: none;
      }
    `}
  }
`;

const HeaderLayout = (props: IProps) => (
  <StyledLayout>
    <header>
      <Header/>
      <SearchBar onSearchChange={props.onSearchChange}/>
    </header>
    {props.children}
  </StyledLayout>
);

export default HeaderLayout;