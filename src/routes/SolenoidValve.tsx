import React from "react";
import ReactPlayer from "react-player";
import ImageGallery from 'react-image-gallery';
import { Root, Videos } from "./styles";
import CaptionedImage from "../CaptionedImage";

// Text
import text from "../text.json";

// Images
import SolenoidImg1 from "../assets/solenoid/1.png";
import SolenoidImg2 from "../assets/solenoid/2.png";
import SolenoidImg3 from "../assets/solenoid/3.jpg";
import SolenoidImg4 from "../assets/solenoid/4.jpg";
import SolenoidImg5 from "../assets/solenoid/5.jpg";
import SolenoidImg6 from "../assets/solenoid/6.jpg";
import SolenoidImg7 from "../assets/solenoid/7.jpg";
import SolenoidImg8 from "../assets/solenoid/8.jpg";

let componentsGallery = [
  {
    original: SolenoidImg3,
    thumbnail: SolenoidImg3,
    description: "O-Ring Poppet"
  },
  {
    original: SolenoidImg4,
    thumbnail: SolenoidImg4,
    description: "V1 Components"
  },
  {
    original: SolenoidImg5,
    thumbnail: SolenoidImg5,
    description: "Coil Winding"
  },
  {
    original: SolenoidImg6,
    thumbnail: SolenoidImg6,
    description: "4140 Plug Nut (courtesy of UTD machine shop)"
  },
  {
    original: SolenoidImg7,
    thumbnail: SolenoidImg7,
    description: "FOD (Foreign Object Debris) in your valve will cause leakage"
  },
  {
    original: SolenoidImg8,
    thumbnail: SolenoidImg8,
    description: "Tapping the actuator shaft (shows lathe scale)"
  }
];

const SolenoidValve = () => {
  return (
    <Root>
      <h1>Solenoid Valve</h1>
      <p>{text.valves.solenoidValve.summary}</p>
      <CaptionedImage img={SolenoidImg1} caption={"Valve Designs"} />
      <ReactPlayer style={{marginTop: "30px"}} url="https://youtu.be/R8LfG0Wj1AU" controls={true} />

      <h2>Upgrades from V1 to V2</h2>
      <p>{text.valves.solenoidValve.upgrades1}</p>
      <p>{text.valves.solenoidValve.upgrades2}</p>

      <h2>Initial Sizing/Analysis</h2>
      <p>{text.valves.solenoidValve.analysis}</p>
      <CaptionedImage img={SolenoidImg2} caption={"ANSYS Maxwell Sizing"} />

      <h2>Solenoid Components</h2>
      <ImageGallery showPlayButton={false} items={componentsGallery} />

      <h2>Early Testing</h2>
      <Videos>
        <ReactPlayer className="Video" url="https://youtu.be/R8LfG0Wj1AU" controls={true} />
        <ReactPlayer className="Video" url="https://youtu.be/Q0ckz8HkasQ" controls={true} />
      </Videos>
      <p>{text.valves.solenoidValve.testing}</p>
    </Root>
  );
}

export default SolenoidValve;