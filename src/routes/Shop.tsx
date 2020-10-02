import React from "react";
import { Root } from "./styles";
import ImageGallery from 'react-image-gallery';

import Shop1Img from "../assets/shop/shop1.jpg";
import Shop2Img from "../assets/shop/shop2.jpg";
import Shop3Img from "../assets/shop/shop3.jpg";
import Shop4Img from "../assets/shop/shop4.jpg";
import Shop5Img from "../assets/shop/shop5.jpg";
import Shop6Img from "../assets/shop/shop6.jpg";

// Text
import text from "../text.json";

let shopSlider = [
  {
    original: Shop1Img,
    thumbnail: Shop1Img
  },
  {
    original: Shop2Img,
    thumbnail: Shop2Img
  },
  {
    original: Shop3Img,
    thumbnail: Shop3Img
  }
];

let testSiteSlider = [
  {
    original: Shop4Img,
    thumbnail: Shop4Img
  },
  {
    original: Shop5Img,
    thumbnail: Shop5Img
  },
  {
    original: Shop6Img,
    thumbnail: Shop6Img
  }
];

const Shop = () => {
  return (
    <Root>
      <h1>The Shop</h1>
      <p>{text.shop.summary}</p>
      <ImageGallery showPlayButton={false} items={shopSlider} />
      <h1>The Test Site</h1>
      <p>{text.shop.testSite}</p>
      <ImageGallery showPlayButton={false} items={testSiteSlider} />
    </Root>
  );
}

export default Shop;
