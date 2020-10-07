
import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import ImageGallery from 'react-image-gallery';
import { Root, Block, Videos, CaptionedImages } from "./styles";
import CaptionedImage from "../CaptionedImage";

// Text
import text from "../text.json";

// Images
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
    thumbnail: PVMountsImg1,
    description: "First valve mount design"
  },
  {
    original: PneumaticValvesImg7,
    thumbnail: PneumaticValvesImg7,
    description: "3D printed valve mount"
  },
  {
    original: PneumaticValvesImg8,
    thumbnail: PneumaticValvesImg8,
    description: "First valve mount broken by technicians"
  }
];

let pvMounts2 = [
  {
    original: PneumaticValvesImg9,
    thumbnail: PneumaticValvesImg9,
    description: "Offsite plasma cutter"
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
    thumbnail: PneumaticValvesImg12,
    description: "Valve mount welded to test stand"
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

let pneumaticDesignConstraints = text.poc1.pneumaticValves.designIntent.map((intent, index) => (
  <li key={index}>{intent}</li>
));

const DesignConstraints = styled(Block)`
  margin-top: 20px;
  ul {
    list-style-type: decimal;
  }
`;

const PneumaticValves = () => {
  return (
    <Root>
      <h1 id="pneumatic-valves">Pneumatic Valves</h1>
      <DesignConstraints>
        <h3>Design Constraints</h3>
        <ul>
          {pneumaticDesignConstraints}
        </ul>
      </DesignConstraints>
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
    </Root>
  );
}

export default PneumaticValves;
