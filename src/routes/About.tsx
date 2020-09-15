import React from "react";
import styled from "styled-components";
import { Root } from "./styles";

// Text
import text from "../text.json";

// Images
import Eddie from "../assets/about/eddie.jpg";
import Sam from "../assets/about/sam.jpg";
import Jacob from "../assets/about/jacob.jpg";

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
    </Root>
  );
}

export default About;
