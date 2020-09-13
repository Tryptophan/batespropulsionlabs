import React from "react";
import { Root, CaptionedImages } from "./styles";
import CaptionedImage from "../CaptionedImage";

// Images
import NitrousOxideImg1 from "../assets/nitrous-oxide/1.jpg";
import NitrousOxideImg2 from "../assets/nitrous-oxide/2.jpg";

// Text
import text from "../text.json";

const NitrousOxide = () => {

  return (
    <Root>
      <h1>Nitrous Oxide</h1>
      <p>{text.nitrousOxide.afterStaticFire1}</p>
      <p>{text.nitrousOxide.afterHydrogenPeroxide}</p>
      <p>{text.nitrousOxide.co2}</p>
      <CaptionedImages>
        <CaptionedImage img={NitrousOxideImg1} caption="Nitrous Oxide Tank (Front)" />
        <CaptionedImage img={NitrousOxideImg2} caption="Nitrous Oxide Tank (Side)" />
      </CaptionedImages>
    </Root>
  );
}

export default NitrousOxide;
