import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, HashRouter, Switch, Route, useLocation } from "react-router-dom";
import { Root } from "./routes/styles";
import GoogleAnalytics from "react-ga";

// Components
import Home from "./Home";
import POC1 from "./routes/POC1";
import KNDX1 from "./routes/KNDX1";
import VerticalIntegrator from "./routes/VerticalIntegrator";
import NitrousOxide from "./routes/NitrousOxide";
import About from "./routes/About";
import PneumaticValves from "./routes/PneumaticValves";
import SolenoidValve from "./routes/SolenoidValve";
import Sponsors from "./routes/Sponsors";

import Sidebar from "./Sidebar";
import Breadcrumbs from "./Breadcrumbs";

// Sidebar items
import sidebarItems from "./sidebar-items.json";

// Text
import text from "./text.json";

// Init Google Analytics
GoogleAnalytics.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID || "");

// Styles
const AppRoot = styled.div`
`;

type SidebarItem = {
  name: string,
  link: string,
  children?: SidebarItem[]
}

// No actual content on page, just indexes other pages with breadcrumbs
const IndexPage = () => {

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
  const items: SidebarItem[] = flatten(sidebarItems);

  const location = useLocation();
  useEffect(() => {
  }, [location]);

  const item = items.find(item => location.pathname === item.link);
  const links = item && item.children && item.children.map((child, index) => (
    <div key={index}>
      <Link to={child.link}>{child.name}</Link>
    </div>
  ));

  return (
    <Root>
      {links}
    </Root>
  );
}

const GATracker = () => {
  const location = useLocation();
  useEffect(() => {
    GoogleAnalytics.pageview(location.pathname + location.hash);
  }, [location]);

  return null;
}

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
    <AppRoot>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <GATracker />
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
          <Route path="/engines/liquid-propellant/nitrous-oxide">
            <ScrollTo />
            <NitrousOxide />
          </Route>
          <Route path="/valves/pneumatic-valves">
            <ScrollTo />
            <PneumaticValves />
          </Route>
          <Route path="/valves/solenoid-valve">
            <ScrollTo />
            <SolenoidValve />
          </Route>
          <Route path="/about">
            <ScrollTo />
            <About />
          </Route>
          <Route path="/sponsors">
            <ScrollTo />
            <Sponsors />
          </Route>
          <Route>
            <IndexPage />
          </Route>
        </Switch>
      </HashRouter>
    </AppRoot>
  );
}

export default App;
