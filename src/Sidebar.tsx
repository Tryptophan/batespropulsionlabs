import React from "react";
import styled from "styled-components";

// TODO: Types
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
`;

const Toggle = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 10px;
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
`;

const Links = styled.ul`
  list-style: none;
  padding-left: 10px;
  li {
    margin: 5px 0 5px 0;
  }
`;

const Sidebar = (props: SidebarProps) => {

  const mapItems = (items: any) => {
    let links = null;
    if (items) {
      links = items.map((item: any) => {
        let children = mapItems(item.children);
        return (
          <li key={item.name}>
            {item.name}
            <Links>{children}</Links>
          </li>
        );
      });
    }
    return (
      <Links>{links}</Links>
    )
  };

  const links = mapItems(props.items);

  return (
    <Root>
      <Toggle><div/><div/><div/></Toggle>
      {links}
    </Root>
  );
}

export default Sidebar;
