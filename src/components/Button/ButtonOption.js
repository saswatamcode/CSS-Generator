import React, { useState } from "react";
import styled from "styled-components";
import ButtonPreview from "./ButtonPreview";

//TODO: Add more properties

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

const OptionsDiv = styled.div`
  background: #fff;
  border-radius: 10px;
  display: inline-block;
  margin: 1rem;
  padding: 2rem;
  position: relative;
  width: 40%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const FormLabel = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  margin: 0.25rem;
  font-weight: 400;
`;

const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  :hover {
    opacity: 1;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #3749f5;
    cursor: pointer;
  }

  ::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #3749f5;
    cursor: pointer;
  }
`;

const PreviewDiv = styled.div`
  background: #fff;
  border-radius: 10px;
  display: inline-block;
  text-align: center;
  margin: 1rem;
  padding: 2rem;
  position: relative;
  width: 40%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

function ButtonOption() {
  const [verticalSize, setVerticalSize] = useState(16);
  const [horizontalSize, setHorizontalSize] = useState(30);
  const [borderRadius, setBorderRadius] = useState(10);
  const [borderSize, setBorderSize] = useState(1);

  return (
    <Container>
      <OptionsDiv>
        <table style={{ width: "100%" }}>
          <tr>
            <td>
              <FormLabel>Vertical Size</FormLabel>
            </td>
            <td>
              <Slider
                type="range"
                min="0"
                max="32"
                value={verticalSize}
                onChange={(e) => {
                  setVerticalSize(e.target.value);
                }}
              ></Slider>
            </td>
          </tr>
          <tr>
            <td>
              <FormLabel>Horizontal Size</FormLabel>
            </td>
            <td>
              <Slider
                type="range"
                min="0"
                max="76"
                value={horizontalSize}
                onChange={(e) => setHorizontalSize(e.target.value)}
              ></Slider>
            </td>
          </tr>
          <tr>
            <td>
              <FormLabel>Border Radius</FormLabel>
            </td>
            <td>
              <Slider
                type="range"
                min="0"
                max="100"
                value={borderRadius}
                onChange={(e) => setBorderRadius(e.target.value)}
              ></Slider>
            </td>
          </tr>
          <tr>
            <td>
              <FormLabel>Border Size</FormLabel>
            </td>
            <td>
              <Slider
                type="range"
                min="0"
                max="12"
                value={borderSize}
                onChange={(e) => setBorderSize(e.target.value)}
              ></Slider>
            </td>
          </tr>
        </table>
      </OptionsDiv>
      <PreviewDiv>
        <ButtonPreview
          verticalSize={verticalSize}
          horizontalSize={horizontalSize}
          borderRadius={borderRadius}
          borderSize={borderSize}
        >
          Preview
        </ButtonPreview>
      </PreviewDiv>
    </Container>
  );
}

export default ButtonOption;
