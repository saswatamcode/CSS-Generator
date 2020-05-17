import React from "react";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const DivOutputDiv = styled.div`
  background: #fff;
  border-radius: 10px;
  display: inline-block;
  margin: 1rem;
  padding: 2rem;
  position: relative;
  width: 90%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const SectionLabel = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 1.25rem;
  margin: 0.25rem;
  font-weight: 700;
`;

function DivOutput(props) {
  const codeString = `
    border-radius: ${props.borderRadius}%;
    border: ${props.borderSize}px solid greenyellow;
    padding: ${props.verticalSize}px ${props.horizontalSize}px;
    color: white;
    background: #2196fc;
    font-size:${props.fontSize}px;
    display: inline-block;
    cursor: pointer;
    `;
  return (
    <DivOutputDiv>
      <SectionLabel>Code</SectionLabel>
      <SyntaxHighlighter language="css" style={dark}>
        {codeString}
      </SyntaxHighlighter>
    </DivOutputDiv>
  );
}

export default DivOutput;
