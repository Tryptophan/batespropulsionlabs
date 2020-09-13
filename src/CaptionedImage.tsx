import React from "react";
import styled from "styled-components";

type CaptionedImageProps = {
  img: string,
  caption: string,
  height?: string
}

const CaptionedImage = (props: CaptionedImageProps) => {

  const Root = styled.div`
    width: 100%;
    height: ${props.height ? props.height : "400px"};
    background-image: url(${props.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;

    span {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
      background-color:rgba(0, 0, 0, 0.25);
      color: white;
      width: calc(100% - 20px);
      border-radius: 5px 5px 0 0;
    }
    :hover {
      span {
        background-color:rgba(0, 0, 0, 0.7);
        padding-bottom: 20px;
      }
    }
  `;

  return (
    <Root>
      <span>{props.caption}</span>
    </Root>
  );
}

export default CaptionedImage;
