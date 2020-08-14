import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Home from "./Home";
import POC1 from "./POC1";
import Sidebar from "./Sidebar";

// Sidebar items
import sidebarItems from "./sidebar-items.json";

// Text
import text from "./text.json";

// Styles
const Root = styled.div`
`;

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
          <Route path="/poc-1">
            <POC1 engineSpecs={text.poc1.engineSpecs} />
          </Route>
        </Switch>
      </BrowserRouter>
    </Root>
  );
}

export default App;
