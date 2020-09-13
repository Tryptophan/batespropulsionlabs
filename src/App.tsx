import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";

// Components
import Home from "./Home";
import POC1 from "./routes/POC1";
import KNDX1 from "./routes/KNDX1";
import VerticalIntegrator from "./routes/VerticalIntegrator";
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

const ScrollTo = () => {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
    } else {
      const elm = document.getElementById(location.hash.substring(1));
      if (elm) {
        elm.scrollIntoView(true);
      }
    }
  }, [location]);

  return (
    <React.Fragment />
  );
}

const App = () => {
  return (
    <Root>
      <BrowserRouter>
        {/* Sidebar navigation */}
        <Sidebar items={sidebarItems} />
        {/* Breadcrumbs, don't render on home or about */}
        <Switch>
          <Route render={({ location }) => {
            return location.pathname !== "/" && location.pathname !== "/about" ? <Breadcrumbs /> : null;
          }} />
        </Switch>
        <Switch>
          <Route exact path="/">
            <ScrollTo />
            <Home />
          </Route>
          <Route path="/engines/liquid-propellant/poc-1">
            <ScrollTo />
            <POC1 engineSpecs={text.poc1.engineSpecs} />
          </Route>
          <Route path="/engines/solid-propellant/kndx-1">
            <ScrollTo />
            <KNDX1 />
          </Route>
          <Route path="/vehicles/vertical-integrator">
            <ScrollTo />
            <VerticalIntegrator />
          </Route>
          <Route path="/about">
            <ScrollTo />
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
