import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import ImageGallery from 'react-image-gallery';

// Text
import text from "../text.json";

// Images
import POC1Img from "../assets/poc-1.png";

// Engine Assembly Images
// Polishing
import EngineAssemblyImg1 from "../assets/poc1-engine-assembly/engine-assembly-1.jpg";
import EngineAssemblyImg2 from "../assets/poc1-engine-assembly/engine-assembly-2.jpg";
// Injector
import EngineAssemblyImg3 from "../assets/poc1-engine-assembly/engine-assembly-3.jpg";
import EngineAssemblyImg4 from "../assets/poc1-engine-assembly/engine-assembly-4.jpg";
import EngineAssemblyImg5 from "../assets/poc1-engine-assembly/engine-assembly-5.jpg";
// Assembly
import EngineAssemblyImg6 from "../assets/poc1-engine-assembly/engine-assembly-6.jpg";
import EngineAssemblyImg7 from "../assets/poc1-engine-assembly/engine-assembly-7.jpg";
import EngineAssemblyImg8 from "../assets/poc1-engine-assembly/engine-assembly-8.jpg";
// Nickel Plating
import EngineAssemblyImg9 from "../assets/poc1-engine-assembly/engine-assembly-9.jpg";
import EngineAssemblyImg10 from "../assets/poc1-engine-assembly/engine-assembly-10.jpg";
import EngineAssemblyImg11 from "../assets/poc1-engine-assembly/engine-assembly-11.jpg";
// Warm Fire
import EngineAssemblyImg12 from "../assets/poc1-engine-assembly/engine-assembly-12.jpg";
import EngineAssemblyImg13 from "../assets/poc1-engine-assembly/engine-assembly-13.jpg";
import EngineAssemblyImg14 from "../assets/poc1-engine-assembly/engine-assembly-14.jpg";
import EngineAssemblyImg15 from "../assets/poc1-engine-assembly/engine-assembly-15.jpg";
import EngineAssemblyImg16 from "../assets/poc1-engine-assembly/engine-assembly-16.jpg";
import EngineAssemblyImg17 from "../assets/poc1-engine-assembly/engine-assembly-17.jpg";
// Water Jacket
import EngineAssemblyImg18 from "../assets/poc1-engine-assembly/engine-assembly-18.jpg";
import EngineAssemblyImg19 from "../assets/poc1-engine-assembly/engine-assembly-19.jpg";
import EngineAssemblyImg20 from "../assets/poc1-engine-assembly/engine-assembly-20.jpg";
// Cooling Insert
import EngineAssemblyImg21 from "../assets/poc1-engine-assembly/engine-assembly-21.jpg";
import EngineAssemblyImg22 from "../assets/poc1-engine-assembly/engine-assembly-22.jpg";
import EngineAssemblyImg23 from "../assets/poc1-engine-assembly/engine-assembly-23.jpg";
// EDM Film Cooling Orifices
import EngineAssemblyImg24 from "../assets/poc1-engine-assembly/engine-assembly-24.jpg";
import EngineAssemblyImg25 from "../assets/poc1-engine-assembly/engine-assembly-25.jpg";
import EngineAssemblyImg26 from "../assets/poc1-engine-assembly/engine-assembly-26.jpg";
// Post Static Fire
import EngineAssemblyImg27 from "../assets/poc1-engine-assembly/engine-assembly-27.jpg";
import EngineAssemblyImg28 from "../assets/poc1-engine-assembly/engine-assembly-28.jpg";
import EngineAssemblyImg29 from "../assets/poc1-engine-assembly/engine-assembly-29.jpg";
import EngineAssemblyImg30 from "../assets/poc1-engine-assembly/engine-assembly-30.jpg";
import EngineAssemblyImg31 from "../assets/poc1-engine-assembly/engine-assembly-31.jpg";
import EngineAssemblyImg32 from "../assets/poc1-engine-assembly/engine-assembly-32.jpg";
// Pitting
import EngineAssemblyImg33 from "../assets/poc1-engine-assembly/engine-assembly-33.jpg";
import EngineAssemblyImg34 from "../assets/poc1-engine-assembly/engine-assembly-34.jpg";

// DAQ Images
import DAQImg1 from "../assets/poc1-daq/daq-1.jpg";
import DAQImg2 from "../assets/poc1-daq/daq-2.jpg";
import DAQImg3 from "../assets/poc1-daq/daq-3.jpg";
import DAQImg4 from "../assets/poc1-daq/daq-4.png";
import DAQImg5 from "../assets/poc1-daq/daq-5.png";

// Components
import CaptionedImage from "../CaptionedImage";

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

const Overview = styled.div`
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
  margin-bottom: 40px;
`;

const Summary = styled(Block)`
`;

const EngineAssembly = styled.div`
`;

const ComparedImages = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
`;

const Galleries = styled.div`
  display: flex;
  gap: 40px;
`;

const Gallery = styled.div`
  p {
    text-align: center;
  }
`;

const DAQ = styled.div``;

const GroundStationImages = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
  height: 450px;
`;

const POC1 = (props: POC1Props) => {
  const titles = props.engineSpecs.map(item => (
    <li key={item.title}>{item.title}</li>
  ));
  const specs = props.engineSpecs.map(item => (
    <li key={item.spec}>{item.spec}</li>
  ));

  let injector = [
    {
      original: EngineAssemblyImg3,
      thumbnail: EngineAssemblyImg3
    },
    {
      original: EngineAssemblyImg4,
      thumbnail: EngineAssemblyImg4
    },
    {
      original: EngineAssemblyImg5,
      thumbnail: EngineAssemblyImg5
    }
  ];

  let assembly = [
    {
      original: EngineAssemblyImg6,
      thumbnail: EngineAssemblyImg6
    },
    {
      original: EngineAssemblyImg7,
      thumbnail: EngineAssemblyImg7
    },
    {
      original: EngineAssemblyImg8,
      thumbnail: EngineAssemblyImg8
    }
  ];

  let nickelPlating = [
    {
      original: EngineAssemblyImg9,
      thumbnail: EngineAssemblyImg9
    },
    {
      original: EngineAssemblyImg10,
      thumbnail: EngineAssemblyImg10
    },
    {
      original: EngineAssemblyImg11,
      thumbnail: EngineAssemblyImg11
    }
  ];

  let warmFire = [
    {
      original: EngineAssemblyImg12,
      thumbnail: EngineAssemblyImg12
    },
    {
      original: EngineAssemblyImg13,
      thumbnail: EngineAssemblyImg13
    },
    {
      original: EngineAssemblyImg14,
      thumbnail: EngineAssemblyImg14
    },
    {
      original: EngineAssemblyImg15,
      thumbnail: EngineAssemblyImg15
    },
    {
      original: EngineAssemblyImg16,
      thumbnail: EngineAssemblyImg16
    },
    {
      original: EngineAssemblyImg17,
      thumbnail: EngineAssemblyImg17
    }
  ];

  let waterJacket = [
    {
      original: EngineAssemblyImg18,
      thumbnail: EngineAssemblyImg18
    },
    {
      original: EngineAssemblyImg19,
      thumbnail: EngineAssemblyImg19
    },
    {
      original: EngineAssemblyImg20,
      thumbnail: EngineAssemblyImg20
    }
  ];

  let coolingInsert = [
    {
      original: EngineAssemblyImg21,
      thumbnail: EngineAssemblyImg21
    },
    {
      original: EngineAssemblyImg22,
      thumbnail: EngineAssemblyImg22
    },
    {
      original: EngineAssemblyImg23,
      thumbnail: EngineAssemblyImg23
    }
  ];

  let edmFilmCoolingOrifices = [
    {
      original: EngineAssemblyImg24,
      thumbnail: EngineAssemblyImg24
    },
    {
      original: EngineAssemblyImg25,
      thumbnail: EngineAssemblyImg25
    },
    {
      original: EngineAssemblyImg26,
      thumbnail: EngineAssemblyImg26
    }
  ];

  let postStaticFire = [
    {
      original: EngineAssemblyImg27,
      thumbnail: EngineAssemblyImg27
    },
    {
      original: EngineAssemblyImg28,
      thumbnail: EngineAssemblyImg28
    },
    {
      original: EngineAssemblyImg29,
      thumbnail: EngineAssemblyImg29
    },
    {
      original: EngineAssemblyImg30,
      thumbnail: EngineAssemblyImg30
    },
    {
      original: EngineAssemblyImg31,
      thumbnail: EngineAssemblyImg31
    },
    {
      original: EngineAssemblyImg32,
      thumbnail: EngineAssemblyImg32
    }
  ];

  let daqHardware = [
    {
      original: DAQImg1,
      thumbnail: DAQImg1
    },
    {
      original: DAQImg2,
      thumbnail: DAQImg2
    },
    {
      original: DAQImg3,
      thumbnail: DAQImg3
    },
  ];

  return (
    <Root>
      <Overview>
        <h1>POC-1 Rocket Engine</h1>
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
      </Overview>
      <EngineAssembly>
        <h2 id="engine-assembly">Engine Assembly</h2>
        <p>{text.poc1.engineAssembly.summary}</p>
        <ComparedImages>
          <CaptionedImage img={EngineAssemblyImg1} caption="Combustion Chamber pre-polishing" />
          <CaptionedImage img={EngineAssemblyImg2} caption="Combustion Chamber post-polishing" />
        </ComparedImages>
        <h3>Combustion Chamber</h3>
        <p>{text.poc1.engineAssembly.combustionChamber}</p>
        <ImageGallery showPlayButton={false} items={injector} />
        <Galleries>
          <Gallery>
            <h3>Assembly</h3>
            <ImageGallery showPlayButton={false} items={assembly} />
          </Gallery>
          <Gallery>
            <h3>Nickel Plating</h3>
            <ImageGallery showPlayButton={false} items={nickelPlating} />
          </Gallery>
        </Galleries>
        <h3>Warm Fire</h3>
        <p>{text.poc1.engineAssembly.warmFire}</p>
        <ImageGallery showPlayButton={false} items={warmFire} />
        <p>{text.poc1.engineAssembly.postWarmFire}<span>TODO</span></p>
        <h3>Water Jacket</h3>
        <p>{text.poc1.engineAssembly.waterJacket1}</p>
        <p>{text.poc1.engineAssembly.waterJacket2}</p>
        <ImageGallery showPlayButton={false} items={waterJacket} />
        <h3>Cooling Insert</h3>
        <p>{text.poc1.engineAssembly.coolingInsert}</p>
        <ImageGallery showPlayButton={false} items={coolingInsert} />
        <h3>EDM Film Cooling Orifices</h3>
        <p>{text.poc1.engineAssembly.edmFilmCoolingOrifices}</p>
        <Galleries>
          <Gallery>
            <ImageGallery showPlayButton={false} items={edmFilmCoolingOrifices} />
          </Gallery>
          <Gallery>
            <ImageGallery showPlayButton={false} items={postStaticFire} />
            <p>{text.poc1.engineAssembly.postStaticFire}</p>
          </Gallery>
        </Galleries>
        <ComparedImages>
          <CaptionedImage img={EngineAssemblyImg33} caption="Pitting after initial cleaning" />
          <CaptionedImage img={EngineAssemblyImg34} caption="After many, many hours of sanding" />
        </ComparedImages>
      </EngineAssembly>
      <DAQ>
        <h2 id="daq">DAQ (Data Acquisition)</h2>
        <h3>Hardware</h3>
        <p>{text.poc1.daq.hardware}</p>
        <ImageGallery showPlayButton={false} items={daqHardware} />
        <h3>Ground Station</h3>
        <p>{text.poc1.daq.groundStation}</p>
        <GroundStationImages>
          <CaptionedImage img={DAQImg4} caption="MatLab GUI" />
          <CaptionedImage img={DAQImg5} caption="Master Control Panel" />
        </GroundStationImages>
      </DAQ>
    </Root>
  );
}

export default POC1;
