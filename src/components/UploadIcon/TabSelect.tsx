/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { colors } from 'notion-ui';

interface TabSelectProps {
  tabs: string[];
  selected?: string;
  handleSelect: (selected: string) => void;
}

export const useTabSelect = (tabs: string[]) => {
  const [selected, setSelected] = React.useState(
    tabs.length > 0 ? tabs[0] : '',
  );
  return {
    tabs,
    selected,
    handleSelect: setSelected,
  };
};

export default function TabSelect(props: TabSelectProps): JSX.Element {
  const { tabs, selected, handleSelect } = props;

  return (
    <Tabs>
      {tabs.map((tab) => (
        <TabItem selected={selected === tab} onClick={() => handleSelect(tab)}>
          {tab}
        </TabItem>
      ))}
    </Tabs>
  );
}

const Tabs = styled.nav`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 16px;
  background-color: ${colors.backgroundEmbed};
  box-shadow: ${colors.grey08} 0px -1px 0px, ${colors.grey08} 0px 1px 0px;
`;

const TabItem = styled.div<{ selected: boolean }>`
  position: relative;
  height: 45px;
  line-height: 45px;
  padding: 0 8px;
  &::after {
    position: absolute;
    left: 8px;
    bottom: 0;
    width: calc(100% - 16px);
    height: 2px;
    background-color: ${colors.grey};
  }
  ${(p) => p.selected && "&::after { content: '';}"}
`;
