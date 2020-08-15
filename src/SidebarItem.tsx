import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

// Types
type Item = {
  name: string,
  link?: string,
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

const Link = styled(Root)`
  :hover {
    text-decoration: underline;
  }
`;

const Name = styled.span`
  margin-right: 5px;
`;

const Toggle = styled.span`

`;

const Arrow = styled.span`
  font-size: 6px;
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

  if (props.item.children) {
    if (collapsed) {
      return (
        <Root>
          <Toggle onClick={() => toggle(!collapsed)}>
            <Name>{props.item.name}</Name><Arrow>&#9660;</Arrow>
          </Toggle>
        </Root>
      );
    } else {
      const items = props.item.children.map((item) => (
        <SidebarItem item={item} />
      ));
      return (
        <Root>
          <Toggle onClick={() => toggle(!collapsed)}>
            <Name>{props.item.name}</Name><Arrow>&#9650;</Arrow>
          </Toggle>
          <SidebarItems>
            {items}
          </SidebarItems>
        </Root>
      );
    }
  } else {
    if (props.item.link) {
      return (
        <Root onClick={() => history.push(props.item.link!)}>
          <Link>{props.item.name}</Link>
        </Root>
      );
    } else {
      return (
        <Root>
          <Toggle onClick={() => toggle(!collapsed)}>
            <Name>{props.item.name}</Name>
          </Toggle>
        </Root>
      );
    }
  }
}

export default SidebarItem;
