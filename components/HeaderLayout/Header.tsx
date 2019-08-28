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
      background-image: url("https://res.cloudinary.com/dgggcrkxq/image/upload/v1566951043/noticon/mwlnqwvswaln1qpz43b6.png");
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