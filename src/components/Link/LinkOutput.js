import React from "react";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const LinkOutputDiv = styled.div`
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

function LinkOutput(props) {
  const codeString = `
  color: ${props.linkColor};
  font-size: ${props.fontSize}px;
  display: inline-block;
  cursor: pointer;
  text-decoration: ${props.underline};
  :hover {
    color: ${props.linkHoverColor};
  }
  :visited {
    color: ${props.linkVisitedColor};
  }
    `;
  return (
    <LinkOutputDiv>
      <SectionLabel>Code</SectionLabel>
      <SyntaxHighlighter language="css" style={dark}>
        {codeString}
      </SyntaxHighlighter>
    </LinkOutputDiv>
  );
}

export default LinkOutput;
