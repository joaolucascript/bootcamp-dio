import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  max-width: 1400px;
  width: 100%;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  justify-content: center;
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border: 1px solid #161616;
  border-radius: 6px;
  padding: 12px;
  user-select: none;
  cursor: pointer;
  z-index: 999;
  margin: 32px 16px 0px 0px;
  background-color: #2b2a33;
  color: white;

  &:focus {
    outline: none;
  }
  &.is-selected {
    background-color: #6b697f;
    color: white;
  }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 12px;
  display: none;
  max-width: 1400px;
  margin: 12px 0 100px 0px;
  width: 100%;
  background-color: #2b2a33;
  border-radius: 16px;
  color: white;

  @media (max-width: 1350px) {
    max-width: 1050px;
    width: 100%;
    margin: 12px auto 100px auto;
  }

  @media (max-width: 1020px) {
    max-width: 700px;
    width: 100%;
    margin: 12px auto 60px auto;
  }

  @media (max-width: 700px) {
    max-width: 380px;
    width: 100%;
    margin: 12px auto 40px auto;
  }

  &.is-selected {
    display: block;
  }
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
  }
`;
