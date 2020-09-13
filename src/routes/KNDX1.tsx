import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { Root, Overview, Engine, Blocks, Summary, EngineSpecs, Specs, CaptionedImages } from "./styles";
import CaptionedImage from "../CaptionedImage";

// Images
import KNDX1Img from "../assets/kndx1/kndx-1.jpg";
import ThrustImg from "../assets/kndx1/kndx-1-thrust.png";
import ThroatErosion1 from "../assets/kndx1/kndx-1-throat-fresh.jpg";
import ThroatErosion2 from "../assets/kndx1/kndx-1-throat-1st-static-fire.jpg";
import ThroatErosion3 from "../assets/kndx1/kndx-1-throat-2nd-static-fire.jpg";
import ThroatErosion4 from "../assets/kndx1/kndx-1-throat-1st-flight.jpg";
import ThroatErosion5 from "../assets/kndx1/kndx-1-throat-fresh-2.jpg";
// Propellant Manufacturing Images
import PropellantManufacturing1 from "../assets/kndx1/propellant-manufacturing/1.png";
import PropellantManufacturing2 from "../assets/kndx1/propellant-manufacturing/2.jpg";
import PropellantManufacturing3 from "../assets/kndx1/propellant-manufacturing/3.jpg";
import PropellantManufacturing4 from "../assets/kndx1/propellant-manufacturing/4.png";
import PropellantManufacturing5 from "../assets/kndx1/propellant-manufacturing/5.jpg";
import PropellantManufacturing6 from "../assets/kndx1/propellant-manufacturing/6.jpg";
import PropellantManufacturing7 from "../assets/kndx1/propellant-manufacturing/7.jpg";
import PropellantManufacturing8 from "../assets/kndx1/propellant-manufacturing/8.jpg";
import PropellantManufacturing9 from "../assets/kndx1/propellant-manufacturing/9.jpg";

// Text
import text from "../text.json";

const PropellantManufacturing = styled.div``;

const KNDX1 = () => {

  const titles = text.kndx1.engineSpecs.map(item => (
    <li key={item.title}>{item.title}</li>
  ));
  const specs = text.kndx1.engineSpecs.map(item => (
    <li key={item.spec}>{item.spec}</li>
  ));

  return (
    <Root>
      <Overview>
        <h1>KNDX-1 Rocket Engine</h1>
        <h2>Overview</h2>
        <Engine>
          <img src={KNDX1Img} alt="KNDX-1" />
          <Blocks>
            <Summary>
              <h3>Summary</h3>
              <p>
                {text.kndx1.summary1}
                <a target="_blank" rel="noopener noreferrer" href="http://www.nakka-rocketry.net/dex.html">http://www.nakka-rocketry.net/dex.html</a>
                {text.kndx1.summary2}
                </p>
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
        <h2>Static Fire 1</h2>
        <ReactPlayer url="https://youtu.be/GNM-Xr77wUs" controls={true} />
        <p>{text.kndx1.staticFire1}</p>
        <CaptionedImage img={ThrustImg} caption="KNDX-1 Thrust Analysis" />

        <h2>Static Fire 2</h2>
        <ReactPlayer url="https://youtu.be/zCNFceTv2Gs" controls={true} />
        <p>{text.kndx1.staticFire2}</p>

        <h2>Throat Erosion</h2>
        <CaptionedImages>
          <CaptionedImage img={ThroatErosion1} caption="Freshly Machined" />
          <CaptionedImage img={ThroatErosion2} caption="After 1st Static Fire" />
          <CaptionedImage img={ThroatErosion3} caption="After 2nd Firing" />
          <CaptionedImage img={ThroatErosion4} caption="After 1st Flight" />
          <CaptionedImage img={ThroatErosion5} caption="New Machined Throat" />
        </CaptionedImages>
        <p>{text.kndx1.throatErosion}</p>
      </Overview>

      <PropellantManufacturing>
        <h2 id="propellant-manufacturing">Propellant Manufacturing</h2>
        <p>{text.kndx1.propellantManufacturing.summary}<a target="_blank" rel="noopener noreferrer"  href="http://www.nakka-rocketry.net/dex.html">http://www.nakka-rocketry.net/dex.html</a></p>
        <h3>Ingredients</h3>
        <CaptionedImages>
          <CaptionedImage img={PropellantManufacturing1} caption="Stump Remover from LOWE's" />
          <CaptionedImage img={PropellantManufacturing2} caption="Dextrose, Corn Sugar from a Homebrew beer store" />
        </CaptionedImages>
        <h3>Steps</h3>

        <CaptionedImages>
          <CaptionedImage img={PropellantManufacturing3} caption={text.kndx1.propellantManufacturing.step1} />
          <CaptionedImage img={PropellantManufacturing4} caption={text.kndx1.propellantManufacturing.step2} />
        </CaptionedImages>
        <p>{text.kndx1.propellantManufacturing.step3}</p>

        <CaptionedImages>
          <CaptionedImage img={PropellantManufacturing5} caption={text.kndx1.propellantManufacturing.step4} />
          <CaptionedImage img={PropellantManufacturing6} caption="Infrared Thermometer" />
        </CaptionedImages>

        <p>{text.kndx1.propellantManufacturing.step5}</p>

        <ReactPlayer url="https://youtu.be/OmadxDQUT-w" controls={true} />

        <p>{text.kndx1.propellantManufacturing.step6}</p>

        <CaptionedImages>
          <CaptionedImage img={PropellantManufacturing7} caption="Molds" />
          <CaptionedImage img={PropellantManufacturing8} caption="Dried Solid Propellant" />
        </CaptionedImages>
        <p>{text.kndx1.propellantManufacturing.step7}</p>
        <p>{text.kndx1.propellantManufacturing.step8}</p>
        <CaptionedImage img={PropellantManufacturing9} caption={text.kndx1.propellantManufacturing.step9} />

      </PropellantManufacturing>
    </Root>
  );
}

export default KNDX1;
