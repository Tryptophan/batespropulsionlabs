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
`;

export const Overview = styled.div`
`;

export const Engine = styled.div`
  display: flex;
  align-items: center;
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
`;

export const Blocks = styled.div`
  display: flex;
  justify-content: space-around;
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
`;