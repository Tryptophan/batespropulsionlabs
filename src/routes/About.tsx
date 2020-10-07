import React from "react";
import styled from "styled-components";
import { Root } from "./styles";
import ImageGallery from "react-image-gallery";

// Text
import text from "../text.json";

// Images
import Eddie from "../assets/about/eddie.jpg";
import Sam from "../assets/about/sam.jpg";
import Dhruv from "../assets/about/dhruv.jpg";
import Chris from "../assets/about/chris.jpg";
import Jacob from "../assets/about/jacob.jpg";

import Shop1Img from "../assets/shop/shop1.jpg";
import Shop2Img from "../assets/shop/shop2.jpg";
import Shop3Img from "../assets/shop/shop3.jpg";
import Shop4Img from "../assets/shop/shop4.jpg";
import Shop5Img from "../assets/shop/shop5.jpg";
import Shop6Img from "../assets/shop/shop6.jpg";

type AboutProps = {
}

const images = [
  {
    name: "Eddie Bates",
    url: Eddie
  },
  {
    name: "Sam Aceves",
    url: Sam
  },
  {
    name: "Dhruv Goel",
    url: Dhruv
  },
  {
    name: "Chris Vallone",
    url: Chris
  },
  {
    name: "Jacob Greenway",
    url: Jacob
  }
];

const Bio = styled.div`
  div {
    display: flex;
    gap: 10px;

    @media(max-width: 1360px) {
      flex-direction: column;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 25%;
  img {
    width: 200px;
    height: 200px;
    border-radius: 200px;
  }
`;

const Details = styled.div`
  flex-direction: column;

  @media(max-width: 1360px) {
    flex-direction: row;
  }
`;

const Detail = styled.div`
  display: flex;
  span:first-child {
    font-weight: bold;
    margin-right: 5px;
  }
`;

const ShopRoot = styled.div`
  margin-top: 40px;
`;

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
    <ShopRoot>
      <h1>Our Shop and Test Site</h1>
      <h2>The Shop</h2>
      <p>{text.shop.summary}</p>
      <ImageGallery showPlayButton={false} items={shopSlider} />
      <h2>The Test Site</h2>
      <p>{text.shop.testSite}</p>
      <ImageGallery showPlayButton={false} items={testSiteSlider} />
    </ShopRoot>
  );
}

const About = (props: AboutProps) => {

  const bios = text.about.map((bio, index) => {

    const img = images.find(image => image.name === bio.name);
    const url = img ? img.url : "";

    return (
      <Bio key={index}>
        <h3>{bio.name}</h3>
        <div>
          <ImageWrapper>
            <img src={url} alt={bio.name} />
          </ImageWrapper>
          <Details>
            <Detail><span>Title:</span><span>{bio.title}</span></Detail>
            <Detail><span>Industry Job:</span><span>{bio.industryJob}</span></Detail>
            <Detail><span>Bio:</span><span>{bio.bio}</span></Detail>
          </Details>
        </div>
      </Bio>
    );
  });

  return (
    <Root>
      <h1>Meet the Team</h1>
      {bios}
      <Shop />
    </Root>
  );
}

export default About;
