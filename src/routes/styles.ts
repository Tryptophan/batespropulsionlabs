import styled from "styled-components";

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
  max-height: 500px;
`;