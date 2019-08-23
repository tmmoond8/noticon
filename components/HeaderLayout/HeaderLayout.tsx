import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import styled from '../../styles/typed-components';

interface IProps {
  search: string;
  children: React.ReactNode;
  onSearchChange: (search: string) => void;
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  & > header {
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    z-index: 10;
    padding: .5rem;
    background-color: rgba(255, 255, 255, .95);
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
  & > div {
    margin-top: 5rem;
  }
`;

const HeaderLayout = (props: IProps) => (
  <StyledLayout>
    <header>
      <Header/>
      <SearchBar search={props.search} onSearchChange={props.onSearchChange}/>
    </header>
    <div>
      {props.children}
    </div>
  </StyledLayout>
);

export default HeaderLayout;