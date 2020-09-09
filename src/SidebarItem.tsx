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
`;

const Link = styled.span`
  :hover {
    text-decoration: underline;
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
  const history = useHistory();
  const [collapsed, toggle] = useState(true);

  if (collapsed) {
    return (
      <Root>
        <ItemComp onClick={(e) => {
          if (props.item.children) {
            e.stopPropagation();
            toggle(!collapsed);
          }
        }}>
          <Link onClick={() => history.push(props.item.link!)}>
            {props.item.name}
          </Link>
          { props.item.children ?
            <Arrow>&#9660;</Arrow>
            : null
          }
        </ItemComp>
      </Root>
    );
  } else {
    const items = props.item.children && props.item.children.map((item) => (
      <SidebarItem item={item} />
    ));
    return (
      <Root>
        <ItemComp onClick={(e) => {
          if (props.item.children) {
            e.stopPropagation();
            toggle(!collapsed);
          }
        }}>
          <Link onClick={() => history.push(props.item.link!)}>
            {props.item.name}
          </Link>
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

export default SidebarItem;
