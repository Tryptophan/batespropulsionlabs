import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

// Components
import Breadcrumbs from "../Breadcrumbs";

// Text
import text from "../text.json";

// Images
import POC1Img from "../assets/poc-1.png";

// Types
import * as BREADCRUMB from "../breadcrumb-links";

// Types
type POC1Props = {
  engineSpecs: EngineSpec[]
}

type EngineSpec = {
  title: string,
  spec: string
}

// Styles
const Root = styled.div`
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

const Engine = styled.div`
  display: flex;
  align-items: center;
`;

const Block = styled.div`
  width: 30%;
  background-color: #33373f;
  padding: 20px;
  border-left: 10px solid #282c34;
  color: white;
  height: fit-content;
`;

const Blocks = styled.div`
  display: flex;
  justify-content: space-around;
`;

const EngineSpecs = styled(Block)`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const Specs = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  ul:first-child {
    font-weight: bold;
    margin-right: 20px;
  }
`;

const Videos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
`;

const Summary = styled(Block)`
`;

const POC1 = (props: POC1Props) => {
  const titles = props.engineSpecs.map(item => (
    <li key={item.title}>{item.title}</li>
  ));
  const specs = props.engineSpecs.map(item => (
    <li key={item.spec}>{item.spec}</li>
  ));
  return (
    <Root>
      <Breadcrumbs breadcrumbs={[
        BREADCRUMB.ENGINES,
        BREADCRUMB.LIQUID_PROPELLANT,
        BREADCRUMB.KEROSENE_GASEOUS_OXYGEN,
        BREADCRUMB.POC1_BC
      ]} />
      <h1>POC-1 Rocket Motor</h1>
      <h2>Overview</h2>
      <Engine>
        <img src={POC1Img} alt="POC-1" />
        <Blocks>
          <Summary>
            <h3>Summary</h3>
            <p>{text.poc1.summary}</p>
          </Summary>
          <EngineSpecs>
            <h3>Engine Specs</h3>
            <Specs>
              <ul>{titles}</ul>
              <ul>{specs}</ul>
            </Specs>
          </EngineSpecs>
        </Blocks>
      </Engine>
      <h2>Media</h2>
      <Videos>
        <ReactPlayer url="https://youtu.be/px7wM-hjnxs" controls={true} />
        <ReactPlayer url="https://www.youtube.com/watch?v=xe2s8tZXD_c" controls={true} />
      </Videos>
    </Root>
  );
}

export default POC1;
