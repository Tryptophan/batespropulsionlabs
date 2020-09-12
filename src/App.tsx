import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Home from "./Home";
import POC1 from "./routes/POC1";
import About from "./routes/About";
import Sidebar from "./Sidebar";
import Breadcrumbs from "./Breadcrumbs";

// Sidebar items
import sidebarItems from "./sidebar-items.json";

// Text
import text from "./text.json";

// Styles
const Root = styled.div`
`;

// No actual content on page, just indexes other pages with breadcrumbs
// const IndexPage = () => {
// }

const App = () => {
  return (
    <Root>
      <BrowserRouter>
        {/* Sidebar navigation */}
        <Sidebar items={sidebarItems} />
        {/* Breadcrumbs, don't render on home or about */}
        <Switch>
          <Route render={({location}) => {
            return location.pathname !== "/" && location.pathname !== "/about" ? <Breadcrumbs /> : null;
          }} />
        </Switch>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/engines/liquid-propellant/poc-1">
            <POC1 engineSpecs={text.poc1.engineSpecs} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route>
            <IndexPage />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </Root>
  );
}

export default App;
