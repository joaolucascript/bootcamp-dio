import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 12px;
  margin-top: 16px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border: 1px solid #161616;
  border-radius: 6px;
  padding: 12px;
  user-select: none;
  cursor: pointer;
  z-index: 999;
  margin: 8px;

  &:focus {
    outline: none;
  }
  &.is-selected {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
