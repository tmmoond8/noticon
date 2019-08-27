import React from 'react';
import styled from '../../styles/typed-components';
import SearchBar from './SearchBar';

interface IProps {
  search: string;
  onSearchChange: (search: string) => void;
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 2.7rem;
  padding: 1rem;
  
  p {
    position: relative;
    padding-left: 4rem;
    font-size: 1.5rem;

    &::before {
      content: "";
      position: absolute;
      height: 3rem;
      width: 3rem;
      left: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background-image: url("https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe3d71a45-416d-43af-83a8-ae659feb705f%2Fanimal.png?table=block&id=497628a9-fb97-42b9-bdf1-497d0e5399b2&width=40&cache=v2");
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;

const Header = (props: IProps) => (
  <StyledHeader>
    <p>Noticon</p>
    <SearchBar search={props.search} onSearchChange={props.onSearchChange}/>
  </StyledHeader> 
)

export default Header;