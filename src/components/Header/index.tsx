/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import Icons from '../Icon';
import { Content, Icon, colors, Loader } from 'notion-ui';
import { observer, useStore } from '../../stores';

const Logo = observer(function () {
  const { icon: { isLoaded } } = useStore();
  return (
    <>
      {isLoaded && <NoticonLogo />}
      {!isLoaded && <LoaderWrapper>
        <Loader.ParentFull />
      </LoaderWrapper>}
      <NoticonText as="P">Noticon</NoticonText>
    </>
  )
})

const SearchBar = observer(function () {
  const { icon } = useStore();
  const [search, setSearch] = useState('');
  const handleChange = React.useCallback(
    (e) => {
      setSearch(e.target.value);
      const value = e.target.value;
      debounce(() => {
        icon.search = value;
      }, 200)();
    },
    [icon, search, setSearch],
  );
  return (
    <StyledSearchBar htmlFor="search-text">
      <>
        {icon.isLoaded && <Icon icon="search" size="Huge" />}
      </>
      <input
        id="search-text"
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="search ..."
      />
    </StyledSearchBar>
  );
});

export default {
  LeftMenus: <Logo />,
  RightMenus: <SearchBar />,
};

const NoticonLogo = styled(Icons.Noticon)`
  margin: 0 4px 0 8px;
`;

const NoticonText = styled(Content.Text)`
  margin: 4px 2px 0 4px;
`;

const LoaderWrapper = styled.div`
  height: 100%;
  width: 18px;
  margin: 0 0 0 8px;
`;

const StyledSearchBar = styled.label`
  display: flex;
  color: ${colors.grey};
  input {
    width: 100px;
    margin: 0 0 0 8px;
    background: none;
    border: none;
    outline: none;
    color: ${colors.grey};
    font-size: 18px;
  }
`;
