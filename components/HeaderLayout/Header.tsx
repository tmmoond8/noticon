import React from 'react';
import { LoadingProps } from 'react-loading';
import styled from '../../styles/typed-components';
import SearchBar from './SearchBar';

interface IProps {
  search: string;
  onSearchChange: (search: string) => void;
  onSetLoading: (loading: LoadingProps | null) => void;
}

const StyledHeader = styled.div`
  display: flex;
  line-height: 2.7rem;
  padding: 1rem;
  
  a {
    position: relative;
    padding-left: 4rem;
    font-size: 1.5rem;
    text-decoration: none;
    color: black;

    &::before {
      content: "";
      position: absolute;
      height: 3rem;
      width: 3rem;
      left: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background-repeat: no-repeat;
      background-size: contain;
    }
    &:first-child::before {
      background-image: url("https://res.cloudinary.com/dgggcrkxq/image/upload/v1566951043/noticon/mwlnqwvswaln1qpz43b6.png");
    }
    &:nth-child(2) {
      flex: 1;
      margin-left: 3rem;
      padding-left: 2rem;
      &::before {
        height: 1.5rem;
        width: 1.5rem;
        background-image: url("https://res.cloudinary.com/dgggcrkxq/image/upload/v1566899596/noticon/slhw4nu8hybreryigopq.png");
      }
    }
  }
`;

const Header = (props: IProps) => {
  const { search, onSearchChange } = props;
  return (
    <StyledHeader>
      <a href="/">Noticon</a>
      <a href="https://github.com/tmmoond8/noticon" target="_blank">Github</a>
      <SearchBar search={search} onSearchChange={onSearchChange}/>
    </StyledHeader> 
  )
}

export default Header;