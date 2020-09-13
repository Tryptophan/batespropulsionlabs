import React from "react";
import styled from "styled-components";
import { useHistory, BrowserRouter } from "react-router-dom";

// Text
import text from "./text.json";

// Images
import HeaderBackground from "./assets/header.png";
import POC1 from "./assets/poc-1.png";
import SolidRocket from "./assets/solid-rocket.png";
import NitrousOxide from "./assets/nitrous-oxide.jpg";

// Styles
const Root = styled.div`
  a {
    text-decoration: none;
    color: #282c34;
  }
`;

const Header = styled.div`
  background-image: url(${HeaderBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 60vh;
  color: white;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom: 10vh;
  h1 {
    font-size: 4em;
  }
`;

const Description = styled.div`
  margin: 0 auto auto 15%;
  width: 30%;
  background-color: #33373f;
  padding: 20px;
  border-left: 10px solid #282c34;
  position: relative;
  top: -40px;
  color: white;
`;

const ProjectsTitle = styled.div`
  color: #282c34;
  margin: 0 auto auto 15%;
  width: 30%;
  margin-bottom: 60px;
`;

const Projects = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 70%;
  margin-bottom: 10vh;
  color: #282c34;
`;

const Project = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
    width: auto;
    max-width: 10vw;
    max-height: 200px;
    align-self: center;
  }
  h3:last-child {
    align-self: end;
  }
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Home = () => {
  const history = useHistory();
  return (
    <Root>
      <BrowserRouter>
        {/* Header image and title */}
        <Header>
          <h1>Bates Propulsion Labs</h1>
        </Header>
        {/* Description */}
        <Description>
          <p>{text.home.description}</p>
        </Description>
        {/* Project links */}
        <ProjectsTitle><h2>Check out what we're building...</h2></ProjectsTitle>
        <Projects>
          <Project onClick={() => history.push("/engines/liquid-propellant/poc-1")}>
            <h3>POC-1</h3>
            <img src={POC1} alt="POC-1" />
            <h3 className="ProjectFooter">Kerosene/Gaseous Oxygen</h3>
          </Project>
          <Project onClick={() => history.push("/vehicles/vertical-integrator")}>
            <h3>Vertical Integrator</h3>
            <img src={SolidRocket} alt="Solid Rocket" />
            <h3 className="ProjectFooter">Experimental Solid Rocket Test Platform</h3>
          </Project>
          <Project onClick={() => history.push("/engines/liquid-propellant/nitrous-oxide")}>
            <h3>Nitrous Oxide</h3>
            <img src={NitrousOxide} alt="Nitrous Oxide" />
            <h3 className="ProjectFooter">Our Current R&#38;D Propellant</h3>
          </Project>
        </Projects>
      </BrowserRouter>
    </Root>
  );
}

export default Home;
