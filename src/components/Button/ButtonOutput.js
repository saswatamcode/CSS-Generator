import React, { useState } from "react";
import styled from "styled-components";

const ButtonOutputDiv = styled.div`
  background: #fff;
  border-radius: 10px;
  display: inline-block;
  margin: 1rem;
  padding: 2rem;
  position: relative;
  width: 90%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const CodeDiv = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  margin: 0.25rem;
  margin-left: 0.75rem;
  font-weight: 400;
`;

function ButtonOutput(props) {
  return (
    <ButtonOutputDiv>
      <CodeDiv>
        <br />
        border-radius: {props.borderRadius}%;
        <br />
        border: {props.borderSize}px solid greenyellow;
        <br />
        padding: {props.verticalSize}px {props.horizontalSize}px;
        <br />
        color: white;
        <br />
        background: green;
        <br />
        font-size:{props.fontSize}px;
        <br />
        display: inline-block;
        <br />
        cursor: pointer;
      </CodeDiv>
    </ButtonOutputDiv>
  );
}

export default ButtonOutput;
