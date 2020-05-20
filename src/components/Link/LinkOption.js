import React, { useState } from "react";
import styled from "styled-components";
import LinkPreview from "./LinkPreview";
import LinkOutput from "./LinkOutput";

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

const CheckboxInput = styled.input`
  height: 70px;
  display: block;
  margin-left: 40%;
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

function LinkOption() {
  const [linkText, setLinkText] = useState("preview");
  const [linkColor, setLinkColor] = useState("blue");
  const [linkHoverColor, setLinkHoverColor] = useState("black");
  const [linkVisitedColor, setLinkVisitedColor] = useState("purple");
  const [underline, setUnderline] = useState("none");
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
                <FormLabel>Link Text</FormLabel>
              </td>
              <td>
                <TextInput
                  onChange={(e) => setLinkText(e.target.value)}
                  value={linkText}
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
              <SectionLabel>Decoration</SectionLabel>
            </tr>
            <tr>
              <td>
                <FormLabel>Link Color</FormLabel>
              </td>
              <td>
                <TextInput
                  onChange={(e) => setLinkColor(e.target.value)}
                  value={linkColor}
                ></TextInput>
              </td>
            </tr>
            <tr>
              <td>
                <FormLabel>Link Hover Color</FormLabel>
              </td>
              <td>
                <TextInput
                  onChange={(e) => setLinkHoverColor(e.target.value)}
                  value={linkHoverColor}
                ></TextInput>
              </td>
            </tr>
            <tr>
              <td>
                <FormLabel>Link Visited Color</FormLabel>
              </td>
              <td>
                <TextInput
                  onChange={(e) => setLinkVisitedColor(e.target.value)}
                  value={linkVisitedColor}
                ></TextInput>
              </td>
            </tr>
            <tr>
              <td>
                <FormLabel>Underline</FormLabel>
              </td>
              <td>
                {" "}
                <CheckboxInput
                  type="checkbox"
                  onChange={(e) =>
                    underline === "none"
                      ? setUnderline("underline")
                      : setUnderline("none")
                  }
                ></CheckboxInput>
              </td>
            </tr>
          </table>
        </OptionsDiv>
        <PreviewDiv>
          <LinkPreview
            underline={underline}
            linkColor={linkColor}
            linkHoverColor={linkHoverColor}
            linkVisitedColor={linkVisitedColor}
            fontSize={fontSize}
          >
            {linkText}
          </LinkPreview>
        </PreviewDiv>
      </Container>
      <Container>
        <LinkOutput
          underline={underline}
          linkColor={linkColor}
          linkHoverColor={linkHoverColor}
          linkVisitedColor={linkVisitedColor}
          fontSize={fontSize}
        ></LinkOutput>
      </Container>
    </>
  );
}

export default LinkOption;
