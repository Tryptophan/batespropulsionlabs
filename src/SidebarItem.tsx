import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const ItemComp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px 20px 10px;
  border-radius: 5px;
  :hover {
    background-color: #282c34;
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

  if (!props.item.children) {
    return (
      <Root>
          <Link to={props.item.link}>
          <ItemComp onClick={(e) => {
            if (props.item.children) {
              e.stopPropagation();
              toggle(!collapsed);
            }
          }}>
            {props.item.name}
          </ItemComp>
        </Link>
      </Root>
    );
  } else {
    if (collapsed) {
      return (
        <Root>
          <ItemComp onClick={(e) => {
            if (props.item.children) {
              e.stopPropagation();
              toggle(!collapsed);
            }
          }}>
            {props.item.name}
            { props.item.children ?
              <Arrow>&#9660;</Arrow>
              : null
            }
          </ItemComp>
        </Root>
      );
    } else {
      const items = props.item.children && props.item.children.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ));
      return (
        <Root>
          <ItemComp onClick={(e) => {
            if (props.item.children) {
              e.stopPropagation();
              toggle(!collapsed);
            }
          }}>
            {props.item.name}
            { props.item.children ?
              <Arrow>&#9650;</Arrow>
              : null
            }
          </ItemComp>
          { props.item.children ?
            <SidebarItems>
              {items}
            </SidebarItems>
            : null
          }
        </Root>
      );
    }
  }
}

export default SidebarItem;
