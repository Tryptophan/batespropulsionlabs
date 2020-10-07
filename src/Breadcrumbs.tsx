import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

// Sidebar items
import sidebarItems from "./sidebar-items.json";

type Breadcrumb = {
  name: string,
  link: string
}

type SidebarItem = {
  name: string,
  link: string,
  children?: SidebarItem[],
  separatePages?: boolean
}

type BreadcrumbsProps = {
}

const Root = styled.div`
  width: 70%;
  margin: 0 auto;
  h1 {
    color: #282c34;
    margin: 0px;
  }
  padding-top: 20px;
  a {
    color: #282c34;
  }

  @media(max-width: 1360px) {
    display: none;
  }
`;

const Crumb = styled.span`
`;

// Get flat list of all sidebar items
const flatten = (items: SidebarItem[]) => {
  return items.reduce((acc: SidebarItem[], curr: SidebarItem) => {
    acc.push(curr);
    if (curr.children) {
      acc = acc.concat(flatten(curr.children));
    }
    return acc;
  }, []);
}
const items: SidebarItem[] = flatten(sidebarItems).filter(item => item.name !== "Overview");

const Breadcrumbs = (props: BreadcrumbsProps) => {

  const location = useLocation();
  useEffect(() => {
  }, [location]);

  // Split the url into breadcrumb links
  let paths = location.pathname.split("/");
  let links = paths.map((path: string) => {
    if (path === "") {
      return "/";
    }
    let breadcrumb = "";
    for (let p of paths) {
      if (p !== "") {
        breadcrumb += "/" + p;
      }
      if (path === p) {
        break;
      }
    }
    return breadcrumb;
  });

  // Build the breadcrumbs
  let breadcrumbs: Breadcrumb[] = [];
  for (let item of items) {
    if (links.includes(item.link)) {
      breadcrumbs.push({ name: item.name, link: item.link });
    }
  }

  const crumbs = breadcrumbs.map((breadcrumb, index) => {
    if (index < breadcrumbs.length - 1) {
      return (
        <Crumb key={index}>
          <Link to={breadcrumb.link}>{breadcrumb.name}</Link>&#8594;
        </Crumb>
      );
    } else {
      return (
        <Crumb key={index}>
          <Link to={breadcrumb.link}>{breadcrumb.name}</Link>
        </Crumb>
      );
    }
  });

  return (
    <Root>
      {crumbs}
    </Root>
  );
}

export default Breadcrumbs;
