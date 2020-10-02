import React from "react";
import { Root } from "./styles";
import ImageGallery from 'react-image-gallery';
import LinkedText from "../LinkedText";

import Dumb1Img from "../assets/dumb/dumb1.gif";
import Dumb2Img from "../assets/dumb/dumb2.jpg";
import Dumb3Img from "../assets/dumb/dumb3.jpg";
import Dumb4Img from "../assets/dumb/dumb4.jpg";
import Dumb5Img from "../assets/dumb/dumb5.jpg";
import Dumb6Img from "../assets/dumb/dumb6.jpg";
import Dumb7Img from "../assets/dumb/dumb7.jpg";
import Dumb8Img from "../assets/dumb/dumb8.jpg";

// Text
import text from "../text.json";

let aluminumCastingSlider = [
  {
    original: Dumb1Img,
    thumbnail: Dumb1Img
  },
  {
    original: Dumb2Img,
    thumbnail: Dumb2Img
  },
  {
    original: Dumb3Img,
    thumbnail: Dumb3Img
  },
  {
    original: Dumb4Img,
    thumbnail: Dumb4Img
  },
  {
    original: Dumb5Img,
    thumbnail: Dumb5Img
  }
];

let weldedSheetMetalSlider = [
  {
    original: Dumb6Img,
    thumbnail: Dumb6Img
  },
  {
    original: Dumb7Img,
    thumbnail: Dumb7Img
  },
  {
    original: Dumb8Img,
    thumbnail: Dumb8Img
  }
];

const Dumb = () => {
  return (
    <Root>
      <h1>Lessons Learned from Combustion Chamber Ideas</h1>
      <p>{text.dumb.summary}</p>
      <h2>Aluminum Casting</h2>
      <LinkedText
          text={text.dumb.aluminumCasting}
          links={[
            {
              label: "King of Random's Mini Metal Foundry",
              href: "https://www.youtube.com/watch?v=hHD10DjxM1g&ab_channel=TheKingofRandom"
            }
          ]}/>
      <ImageGallery showPlayButton={false} items={aluminumCastingSlider} />
      <h2>Welded Sheet Metal</h2>
      <p>{text.dumb.weldedSheetMetal}</p>
      <ImageGallery showPlayButton={false} items={weldedSheetMetalSlider} />
    </Root>
  );
}

export default Dumb;
