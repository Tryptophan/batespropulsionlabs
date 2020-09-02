import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import * as breadcrumbLinks from "./breadcrumb-links";
import { Breadcrumb } from "./types";

// Components
import Home from "./Home";
import POC1 from "./routes/POC1";
import Sidebar from "./Sidebar";
import Breadcrumbs from "./Breadcrumbs";

// Sidebar items
import sidebarItems from "./sidebar-items.json";

// Text
import text from "./text.json";

// Styles
const Root = styled.div`
`;

const BreadcrumbsRoot = styled.div`
  width: 70%;
  margin: 0 auto;
  img {
    width: 80%;
  }
  h1 {
    color: #282c34;
    margin: 0px;
  }
  padding-top: 20px;
`;

// No actual content on page, just indexes other pages with breadcrumbs
const IndexPage = () => {
  const location = useLocation();
  useEffect(() => {
  }, [location]);

  let breadcrumbs: Breadcrumb[] = [];
  // Check the page url matches an existing breadcrumb
  for (let breadcrumb of Object.values(breadcrumbLinks)) {
    if (location.pathname.includes(breadcrumb.link)) {
      breadcrumbs.push(breadcrumb);
    }
  }

  return (
    <BreadcrumbsRoot>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </BreadcrumbsRoot>
  );
}

const App = () => {
  return (
    <Root>
      <BrowserRouter>
        {/* Sidebar navigation */}
        <Sidebar items={sidebarItems} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={breadcrumbLinks.POC1_BC.link}>
            <POC1 engineSpecs={text.poc1.engineSpecs} />
          </Route>
          <Route>
            <IndexPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Root>
  );
}

export default App;
