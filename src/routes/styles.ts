import styled from "styled-components";

export const Root = styled.div`
  width: 70%;
  margin: 0 auto;
  img {
    width: 80%;
  }
  a {
    color: black;
  }
  h1, h2, h3, h4 {
    color: #282c34;
  }
  h1 {
    margin: 0px;
  }
  padding-top: 20px;
  margin-bottom: 40px;

  @media(max-width: 1360px) {
    padding-top: 85px;
    width: 80%;
    h1 {
      font-size: 1.5em;
    }
    h2 {
      font-size: 1.2em;
    }
    h3 {
      font-size: 1em;
    }
    h4 {
      font-szie: .75em;
    }

    .Video {
      width: 100% !important;
      max-height: 25vh !important;
    }
  }
`;

export const Overview = styled.div`
  img {
    width: 50vw;
  }
`;

export const Engine = styled.div`
  display: flex;
  align-items: center;

  @media(max-width: 1360px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Block = styled.div`
  width: 30%;
  background-color: #33373f;
  padding: 20px;
  border-left: 10px solid #282c34;
  color: white;
  height: fit-content;
  h3 {
    color: white;
  }
  a {
    color: white;
  }

  @media(max-width: 1360px) {
    width: auto;
    // width: 100%;
    // width: 100%;
    // h3 {
    //   font-size: .05em;
    // }
  }
`;

export const Blocks = styled.div`
  display: flex;
  justify-content: space-around;

  @media(max-width: 1360px) {
    flex-direction: column;
  }
`;

export const EngineSpecs = styled(Block)`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const Specs = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  ul:first-child {
    font-weight: bold;
    margin-right: 20px;
  }
`;

export const Summary = styled(Block)`
`;

export const CaptionedImages = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media(max-width: 1360px) {
    flex-direction: column;
  }
`;

export const Videos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media(max-width: 1360px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Link = styled.span`
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
`;