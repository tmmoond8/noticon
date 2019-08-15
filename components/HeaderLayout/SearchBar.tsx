import React from 'react';
import styled from '../../styles/typed-components';

interface IProps {
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>
}

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2.7rem;
  label {
    width: 1.5rem;
    height: 1.5rem;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNS44NTMgMTYuNTZjLTEuNjgzIDEuNTE3LTMuOTExIDIuNDQtNi4zNTMgMi40NC01LjI0MyAwLTkuNS00LjI1Ny05LjUtOS41czQuMjU3LTkuNSA5LjUtOS41IDkuNSA0LjI1NyA5LjUgOS41YzAgMi40NDItLjkyMyA0LjY3LTIuNDQgNi4zNTNsNy40NCA3LjQ0LS43MDcuNzA3LTcuNDQtNy40NHptLTYuMzUzLTE1LjU2YzQuNjkxIDAgOC41IDMuODA5IDguNSA4LjVzLTMuODA5IDguNS04LjUgOC41LTguNS0zLjgwOS04LjUtOC41IDMuODA5LTguNSA4LjUtOC41eiIvPjwvc3ZnPg==");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin: 0 .5rem 0 1rem;
  }
  input {
    height: inherit;
    flex: 1;
    border: none;
    outline: none;
    font-size: 1.2rem;
  }
`;

const SearchBar = (props: IProps) => (
  <StyledSearchBar>
    <label htmlFor="search_input"/>
    <input id="search_input" type="text" value="abc" placeholder="Search..."/>
  </StyledSearchBar>
)

export default SearchBar;