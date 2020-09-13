import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { Root, Overview, CaptionedImages } from "./styles";
import CaptionedImage from "../CaptionedImage";

// Images
import VerticalIntegratorImg from "../assets/solid-rocket.png";
import AltitudeLogsImg from "../assets/vertical-integrator/alt.png";
import AccelerationLogsImg from "../assets/vertical-integrator/acc.png";

import ParachuteImg from "../assets/vertical-integrator/parachute.jpg";
import GoresImg from "../assets/vertical-integrator/gores.jpg";
import PlungerV1Img from "../assets/vertical-integrator/plungerv1.png";
import PlungerV2Img from "../assets/vertical-integrator/plungerv2.png";
import DeployerImg from "../assets/vertical-integrator/deployer.png";

import Board1Img from "../assets/vertical-integrator/board1.jpg";
import Board2Img from "../assets/vertical-integrator/board2.png";
import BoardPricingImg from "../assets/vertical-integrator/board-pricing.png";

// Text
import text from "../text.json";

const ImageSummary = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;

const SummaryAndVideo = styled.div`
  display: flex;
  flex-direction: column;
  div {
    flex-grow: 1;
  }
`;

const Recovery = styled.div``;

const Avionics = styled.div``;

const KNDX1 = () => {

  return (
    <Root>
      <Overview>
        <h1>Vertical Integrator</h1>
        <h2>Overview</h2>
        <ImageSummary>
          <CaptionedImage height="800px" img={VerticalIntegratorImg} caption="Vertical Integrator" />
          <SummaryAndVideo>
            <p>{text.verticalIntegrator.summary}</p>
            <ReactPlayer width="100%" height="auto" url="https://www.youtube.com/watch?v=dbl5VsLI834" controls={true} />
          </SummaryAndVideo>
        </ImageSummary>
        <p>{text.verticalIntegrator.designed}</p>
        <CaptionedImages>
          <CaptionedImage img={AltitudeLogsImg} caption="Flight 1 Altitude Recording" />
          <CaptionedImage img={AccelerationLogsImg} caption="Flight 1 Acceleration Recording" />
        </CaptionedImages>
        <p>{text.verticalIntegrator.flight1}</p>
      </Overview>
      <Recovery>
        <h2 id="recovery">Recovery</h2>

        <p>{text.verticalIntegrator.recovery.parachute}</p>
        <p>{text.verticalIntegrator.recovery.gores}</p>

        <CaptionedImages>
          <CaptionedImage img={ParachuteImg} caption="Parachute" />
          <CaptionedImage img={GoresImg} caption="Parachute Gores" />
        </CaptionedImages>

        <p>{text.verticalIntegrator.recovery.deployment}</p>
        <p>{text.verticalIntegrator.recovery.gas}</p>

        <CaptionedImages>
          <CaptionedImage img={PlungerV1Img} caption="Plunger V1" />
          <CaptionedImage img={PlungerV2Img} caption="Plunger V2" />
          <CaptionedImage img={DeployerImg} caption="Deployment Capsule" />
        </CaptionedImages>

        <h3>Parachute Ejection Testing Compilation</h3>
        <ReactPlayer width="100%" height="60vh" url="https://youtu.be/Wyqd5uTbueM" controls={true} />
      </Recovery>
      <Avionics>
        <h2 id="avionics">Avionics</h2>
        <p>{text.verticalIntegrator.avionics.summary}</p>
        <CaptionedImages>
          <CaptionedImage img={Board1Img} caption="Avionics Board (Front)" />
          <CaptionedImage img={Board2Img} caption="Avionics Board (Back)" />
        </CaptionedImages>
        <CaptionedImage img={BoardPricingImg} caption="Pricing Breakdown" />
      </Avionics>
    </Root>
  );
}

export default KNDX1;
