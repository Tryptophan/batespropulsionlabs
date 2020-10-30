import React from "react";
import { Root } from "./styles";
import styled from "styled-components";

// Images
import SponsorsImg from "../assets/sponsors.png";

const SponsorsStyles = styled.div`
  img {
    width: 100%;
    margin: 0 auto;
  }
`;

const Sponsors = () => {
  return (
    <Root>
      <h1>Our Sponsors</h1>
      <SponsorsStyles>
        <img src={SponsorsImg} alt="Our Sponsors" />
      </SponsorsStyles>
    </Root>
  );
}

export default Sponsors;
