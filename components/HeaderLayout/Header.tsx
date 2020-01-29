import React, { useState } from 'react';
import { LoadingProps } from 'react-loading';
import Switch from '../../components/Switch';
import styled from '../../styles/typed-components';
import { SortMode } from '../../types';
import SearchBar from './SearchBar';

interface IProps {
  search: string;
  onSearchChange: (search: string) => void;
  sortMode: SortMode;
  onToggleSortMode: () => void;
  onSetLoading: (loading: LoadingProps | null) => void;
}



const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
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
  const { search, sortMode, onSetLoading, onSearchChange } = props;
  const [ sort, toggleSort ] = useState(sortMode);
  const toggleSortMode = () => {
    toggleSort(sort === "date" ? "alphabet" : "date");
    onSetLoading({ type: "cubes"})
    setTimeout(() => {
      props.onToggleSortMode();
      onSetLoading(null);
    }, 500);
  }
  return (
    <StyledHeader>
      <a href="/">Noticon</a>
      <a href="https://github.com/tmmoond8/noticon" target="_blank">Github</a>
      <Switch 
        isTrue={sort === "date"} 
        trueText="latest" 
        falseText="alphabet" 
        onToggle={toggleSortMode}
        style={{ width: '10rem', margin: 'auto 0 auto auto'}}
      />
      <SearchBar search={search} onSearchChange={onSearchChange}/>
    </StyledHeader> 
  )
}

export default Header;