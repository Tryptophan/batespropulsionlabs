import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import ImageGallery from 'react-image-gallery';
import { Root, Overview, Engine, Blocks, Summary, EngineSpecs, Specs, Block, CaptionedImages } from "./styles";

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

// Pneumatic Valves Images
// Early Development
import PVEarlyImg1 from "../assets/poc1-pneumatic-valves/pv-early-1.jpg";
import PVEarlyImg2 from "../assets/poc1-pneumatic-valves/pv-early-2.jpg";
// Design 1
import PneumaticValvesImg1 from "../assets/poc1-pneumatic-valves/pneumatic-valves-1.jpg";
import PneumaticValvesImg2 from "../assets/poc1-pneumatic-valves/pneumatic-valves-2.jpg";
import PneumaticValvesImg3 from "../assets/poc1-pneumatic-valves/pneumatic-valves-3.png";
// Design 2
import PVDesign2Img1 from "../assets/poc1-pneumatic-valves/pv-design2-1.jpg";
import PneumaticValvesImg4 from "../assets/poc1-pneumatic-valves/pneumatic-valves-4.jpg";
import PneumaticValvesImg5 from "../assets/poc1-pneumatic-valves/pneumatic-valves-5.jpg";
// Valve Mounts
import PVMountsImg1 from "../assets/poc1-pneumatic-valves/pv-mounts-1.jpg";
import PneumaticValvesImg7 from "../assets/poc1-pneumatic-valves/pneumatic-valves-7.jpg";
import PneumaticValvesImg8 from "../assets/poc1-pneumatic-valves/pneumatic-valves-8.jpg";
// Valve Mounts 2
import PneumaticValvesImg9 from "../assets/poc1-pneumatic-valves/pneumatic-valves-9.png";
import PneumaticValvesImg10 from "../assets/poc1-pneumatic-valves/pneumatic-valves-10.jpg";
import PneumaticValvesImg11 from "../assets/poc1-pneumatic-valves/pneumatic-valves-11.jpg";
import PneumaticValvesImg12 from "../assets/poc1-pneumatic-valves/pneumatic-valves-12.jpg";
// Final Product
import PneumaticValvesImg13 from "../assets/poc1-pneumatic-valves/pneumatic-valves-13.jpg";
import PneumaticValvesImg14 from "../assets/poc1-pneumatic-valves/pneumatic-valves-14.jpg";
import PneumaticValvesImg15 from "../assets/poc1-pneumatic-valves/pneumatic-valves-15.jpg";

// Throttle Valves Images
// import ThrottleValvesImg1 from "../assets/poc1-throttle-valves/throttle-valves-1.jpg";

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
const Videos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media(max-width: 1360px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const EngineAssembly = styled.div`
`;

const DAQ = styled.div``;

const DesignIntent = styled(Block)`
  ul {
    list-style-type: decimal;
  }
`;

const PneumaticValves = styled.div``;

const ThrottleValves = styled.div``;

// const ThrottleValveDesign = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 40px;
// `;

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
    }
  ];

  let pneumaticValvesDesign1 = [
    {
      original: PneumaticValvesImg1,
      thumbnail: PneumaticValvesImg1
    },
    {
      original: PneumaticValvesImg2,
      thumbnail: PneumaticValvesImg2
    },
    {
      original: PneumaticValvesImg3,
      thumbnail: PneumaticValvesImg3
    }
  ];

  let pneumaticValvesDesign2 = [
    {
      original: PVDesign2Img1,
      thumbnail: PVDesign2Img1
    },
    {
      original: PneumaticValvesImg4,
      thumbnail: PneumaticValvesImg4
    },
    {
      original: PneumaticValvesImg5,
      thumbnail: PneumaticValvesImg5
    }
  ];

  let pneumaticValveMounts = [
    {
      original: PVMountsImg1,
      thumbnail: PVMountsImg1
    },
    {
      original: PneumaticValvesImg7,
      thumbnail: PneumaticValvesImg7
    },
    {
      original: PneumaticValvesImg8,
      thumbnail: PneumaticValvesImg8
    }
  ];

  let pvMounts2 = [
    {
      original: PneumaticValvesImg9,
      thumbnail: PneumaticValvesImg9
    },
    {
      original: PneumaticValvesImg10,
      thumbnail: PneumaticValvesImg10
    },
    {
      original: PneumaticValvesImg11,
      thumbnail: PneumaticValvesImg11
    },
    {
      original: PneumaticValvesImg12,
      thumbnail: PneumaticValvesImg12
    }
  ];

  let pneumaticValvesFinalProduct = [
    {
      original: PneumaticValvesImg13,
      thumbnail: PneumaticValvesImg13
    },
    {
      original: PneumaticValvesImg14,
      thumbnail: PneumaticValvesImg14
    },
    {
      original: PneumaticValvesImg15,
      thumbnail: PneumaticValvesImg15
    }
  ]

  let pneumaticDesignIntent = text.poc1.pneumaticValves.designIntent.map((intent, index) => (
    <li key={index}>{intent}</li>
  ));

  // let throttleDesignIntent = text.poc1.throttleValves.designIntent.map((intent, index) => (
  //   <li key={index}>{intent}</li>
  // ));

  return (
    <Root>
      <Overview>
        <h1>POC-1 Rocket Engine</h1>
        <h2>Overview</h2>
        <Engine>
          <CaptionedImage img={POC1Img} caption="POC-1" />
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
          <ReactPlayer className="Video" url="https://youtu.be/px7wM-hjnxs" controls={true} />
          <ReactPlayer className="Video" url="https://www.youtube.com/watch?v=xe2s8tZXD_c" controls={true} />
        </Videos>
      </Overview>
      <EngineAssembly>
        <h2 id="engine-assembly">Engine Assembly</h2>
        <p>{text.poc1.engineAssembly.summary}</p>
        <CaptionedImages>
          <CaptionedImage img={EngineAssemblyImg1} caption="Combustion Chamber pre-polishing" />
          <CaptionedImage img={EngineAssemblyImg2} caption="Combustion Chamber post-polishing" />
        </CaptionedImages>
        <h3>Combustion Chamber</h3>
        <p>{text.poc1.engineAssembly.combustionChamber}</p>
        <ImageGallery showPlayButton={false} items={injector} />
        <h3>Assembly</h3>
        <ImageGallery showPlayButton={false} items={assembly} />
        <h3>Nickel Plating</h3>
        <ImageGallery showPlayButton={false} items={nickelPlating} />
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
        <ImageGallery showPlayButton={false} items={edmFilmCoolingOrifices} />
        <h4>{text.poc1.engineAssembly.postStaticFire}</h4>
        <ImageGallery showPlayButton={false} items={postStaticFire} />
        <CaptionedImages>
          <CaptionedImage img={EngineAssemblyImg33} caption="Pitting after initial cleaning" />
          <CaptionedImage img={EngineAssemblyImg34} caption="After many, many hours of sanding" />
        </CaptionedImages>
      </EngineAssembly>
      <DAQ>
        <h2 id="daq">DAQ (Data Acquisition)</h2>
        <h3>Hardware</h3>
        <p>{text.poc1.daq.hardware}</p>
        <ImageGallery showPlayButton={false} items={daqHardware} />
        <h3>Ground Station</h3>
        <p>{text.poc1.daq.groundStation}</p>
        <CaptionedImages>
          <CaptionedImage img={DAQImg4} caption="MatLab GUI" />
          <CaptionedImage img={DAQImg5} caption="Master Control Panel" />
        </CaptionedImages>
      </DAQ>
      <PneumaticValves>
        <h2 id="pneumatic-valves">Pneumatic Valves</h2>
        <DesignIntent>
          <h3>Design Intent</h3>
          <ul>
            {pneumaticDesignIntent}
          </ul>
        </DesignIntent>
        <p>{text.poc1.pneumaticValves.earlyDevelopment}</p>
        <CaptionedImages>
          <CaptionedImage img={PVEarlyImg1} caption="Valve" />
          <CaptionedImage img={PVEarlyImg2} caption="Pneumatic Cylinder" />
        </CaptionedImages>
        <h3>Design 1</h3>
        <p>{text.poc1.pneumaticValves.design1}</p>
        <ImageGallery showPlayButton={false} items={pneumaticValvesDesign1} />
        <h3>Design 2</h3>
        <p>{text.poc1.pneumaticValves.design2.summary}</p>
        <ImageGallery showPlayButton={false} items={pneumaticValvesDesign2} />
        <h4>Testing</h4>
        <p>{text.poc1.pneumaticValves.design2.testing}</p>
        <Videos>
          <ReactPlayer className="Video" url="https://www.youtube.com/watch?v=GEod86Dksuo" controls={true} />
          <ReactPlayer className="Video" url="https://www.youtube.com/watch?v=xnHX11NeHQ0" controls={true} />
        </Videos>
        <p>{text.poc1.pneumaticValves.design2.afterTesting}</p>
        <h3>Valve Mounts</h3>
        <p>{text.poc1.pneumaticValves.valveMounts}</p>
        <ImageGallery showPlayButton={false} items={pneumaticValveMounts} />
        <p>{text.poc1.pneumaticValves.valveMounts2}</p>
        <ImageGallery showPlayButton={false} items={pvMounts2} />
        <h3>Final Product</h3>
        <ImageGallery showPlayButton={false} items={pneumaticValvesFinalProduct} />
        <h4>Valve Actuation Testing (All Valves)</h4>
        <ReactPlayer className="Video" url="https://youtu.be/jxv6eSGMJCA" controls={true} />
      </PneumaticValves>
      <ThrottleValves>
        <h2 id="throttle-valves">Throttle Valves</h2>
        <p>Work in progress...</p>
        {/* <ThrottleValveDesign>
          <DesignIntent>
            <ul>
              {throttleDesignIntent}
            </ul>
          </DesignIntent>
          <CaptionedImage img={ThrottleValvesImg1} caption="Current Throttle Valve Design" />
        </ThrottleValveDesign> */}
      </ThrottleValves>
    </Root>
  );
}

export default POC1;
