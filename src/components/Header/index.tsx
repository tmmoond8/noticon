/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import Icons from '../Icon';
import { desktop } from '../../styles/mediaQuery';
import { Content, Icon, colors, Loader } from 'notion-ui';
import { observer, useStore } from '../../stores';

const Logo = observer(function () {
  const {
    icon: { isLoaded },
  } = useStore();
  return (
    <>
      {isLoaded && <NoticonLogo />}
      {!isLoaded && (
        <LoaderWrapper>
          <Loader.ParentFull />
        </LoaderWrapper>
      )}
      <NoticonText as="P">Noticon</NoticonText>
      <Hitz href="https://hits.seeyoufarm.com">
        <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fnoticon.tammolo.com&count_bg=%23656D72&title_bg=%23656D72&icon=&icon_color=%23000000&title=hits&edge_flat=false" />
      </Hitz>
    </>
  );
});

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
      <>{icon.isLoaded && <Icon icon="search" size="Huge" />}</>
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
  padding-left: 8px;
  input {
    width: 100px;
    margin: 0 0 0 2px;
    background: none;
    border: none;
    outline: none;
    color: ${colors.grey};
    font-size: 18 px;
  }
`;

const Hitz = styled.a`
  position: relative;
  top: 2px;
  padding-left: 8px;
  ${desktop(css`
    padding-left: 20px;
  `)};
`;
