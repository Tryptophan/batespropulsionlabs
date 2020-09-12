import React from "react";
import styled from "styled-components";

type CaptionedImageProps = {
  img: string,
  caption: string
}

const Root = styled.div`
  width: 48%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
  }
  span {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px;
    background-color:rgba(0, 0, 0, 0.25);
    color: white;
    width: 100%;
  }
  :hover {
    span {
      background-color:rgba(0, 0, 0, 0.5);
      padding-bottom: 20px;
    }
  }
`;

const CaptionedImage = (props: CaptionedImageProps) => {
  return (
    <Root>
      <img src={props.img} alt={props.caption} />
      <span>{props.caption}</span>
    </Root>
  );
}

export default CaptionedImage;
