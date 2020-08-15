import React, { useState } from "react";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";

import sidebarItems from "./sidebar-items.json";

// Types
type SidebarProps = {
  items: any
}

// Styles
const Root = styled.div`
  width: 10%;
  height: 100%;
  background-color: #33373f;
  position: fixed;
  padding: 20px;
  color: white;
  z-index: 999;
  > ul:first-of-type {
    padding-left: 0px !important;
  }
  > div {
    margin-bottom: 20px;
  }
`;

const Collapsed = styled(Root)`
  width: auto;
  height: auto;
  padding: 10px;
  border-radius: 5px;
  top: 10px;
  left: 10px;
  > div {
    margin-bottom: 0px;
  }
`;

const Toggle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  div {
    width: 80%;
    height: 4px;
    border-radius: 5px;
    background-color: white;
  }
  :hover {
    cursor: pointer;
  }
`;

const Sidebar = (props: SidebarProps) => {
  const [collapsed, toggle] = useState(true);

  if (collapsed) {
    return (
      <Collapsed>
        <Toggle onClick={() => toggle(!collapsed)}><div /><div /><div /></Toggle>
      </Collapsed>
    );
  } else {
    const items = sidebarItems.map((item) => (
      <SidebarItem item={item} />
    ));

    return (
      <Root>
        <Toggle onClick={() => toggle(!collapsed)}><div /><div /><div /></Toggle>
        {items}
      </Root>
    );
  }
}

export default Sidebar;
