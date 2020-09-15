import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

// Types
type Item = {
  name: string,
  link: string,
  children?: Item[]
}

type SidebarItemProps = {
  item: Item
}

const Root = styled.li`
  list-style: none;
  :hover {
    cursor: pointer;
  }
  font-size: 14px;
  a {
    text-decoration: none;
    color: white;
  }
`;

const Link = styled.div``;

const ItemComp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px 20px 10px;
  border-radius: 5px;
  :hover {
    background-color: #282c34;
  }

  @media (max-width: 1360px) {
    padding-right: 40px;
  }
`;

const Arrow = styled.span`
  font-size: 10px;
`;

const SidebarItems = styled.ul`
  list-style: none;
  padding-left: 10px;
  margin: 0px;
  li {
    margin: 5px 0 5px 0;
  }
`;

const SidebarItem = (props: SidebarItemProps) => {
  const [collapsed, toggle] = useState(true);
  const history = useHistory();

  if (!props.item.children) {
    return (
      <Root>
        <Link onClick={() => history.push(props.item.link)}>
          <ItemComp>
            {props.item.name}
          </ItemComp>
        </Link>
      </Root>
    );
  } else {

    // Check if any children also have children (single-deep item)
    const linkDropdown = props.item.children.reduce((acc: boolean, curr: Item) => {
      return acc && !curr.children;
    }, true);

    let children = null;
    if (!collapsed) {
      const items = props.item.children && props.item.children.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ));
      children = (
        <SidebarItems>
          {items}
        </SidebarItems>
      );
    }

    const dropdown = (
      <React.Fragment>
        <ItemComp onClick={() => toggle(!collapsed)}>
          {props.item.name}
          {collapsed ?
            <Arrow>&#9660;</Arrow> :
            <Arrow>&#9650;</Arrow>
          }
        </ItemComp>
      </React.Fragment>
    );

    if (linkDropdown) {
      return (
        <Root>
          <Link onClick={() => history.push(props.item.link)}>
            {dropdown}
          </Link>
          {children}
        </Root>
      );
    } else {
      return (
        <Root>
          {dropdown}
          {children}
        </Root>
      );
    }
  }
}

export default SidebarItem;
