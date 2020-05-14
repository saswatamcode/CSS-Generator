import React, { useState } from "react";
import styled from "styled-components";
import ButtonPreview from "./ButtonPreview";
import ButtonOutput from "./ButtonOutput";

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
  margin-left: 0.75rem;
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

const TextInput = styled.input`
  border-radius: 30px;
  width: 80%;
  height: 40px;
  margin: 0.55rem;
  padding: 0.55rem;
  padding-left: 1rem;
  border: 1px solid;
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  font-weight: 400;
  :focus {
    outline: none;
  }
`;

const SectionLabel = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 1.25rem;
  margin: 0.25rem;
  font-weight: 700;
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
  const [btnText, setBtnText] = useState("preview");
  const [fontSize, setFontSize] = useState(16);

  return (
    <>
      <Container>
        <OptionsDiv>
          <table style={{ width: "100%" }}>
            <tr>
              <SectionLabel>Text</SectionLabel>
            </tr>
            <tr>
              <td>
                <FormLabel>Button Text</FormLabel>
              </td>
              <td>
                <TextInput
                  onChange={(e) => setBtnText(e.target.value)}
                  value={btnText}
                ></TextInput>
              </td>
            </tr>
            <tr>
              <td>
                <FormLabel>Font Size</FormLabel>
              </td>
              <td>
                <Slider
                  type="range"
                  min="8"
                  max="28"
                  value={fontSize}
                  onChange={(e) => {
                    setFontSize(e.target.value);
                  }}
                ></Slider>
              </td>
            </tr>
            <tr>
              <SectionLabel>Size</SectionLabel>
            </tr>
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
              <SectionLabel>Border</SectionLabel>
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
            fontSize={fontSize}
          >
            {btnText}
          </ButtonPreview>
        </PreviewDiv>
      </Container>
      <Container>
        <ButtonOutput
          verticalSize={verticalSize}
          horizontalSize={horizontalSize}
          borderRadius={borderRadius}
          borderSize={borderSize}
          fontSize={fontSize}
        ></ButtonOutput>
      </Container>
    </>
  );
}

export default ButtonOption;
