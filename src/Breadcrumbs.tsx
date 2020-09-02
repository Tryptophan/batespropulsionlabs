import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Breadcrumb } from "./types";

type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[]
}

const Root = styled.span`
`;

const Crumb = styled(Root)`
`;

const Breadcrumbs = (props: BreadcrumbsProps) => {

  const breadcrumbs = props.breadcrumbs.map((breadcrumb, index) => {
    if (index < props.breadcrumbs.length - 1) {
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
      {breadcrumbs}
    </Root>
  );
}

export default Breadcrumbs;
