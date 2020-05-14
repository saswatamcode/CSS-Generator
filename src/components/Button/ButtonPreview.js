import styled from "styled-components";

const ButtonPreview = styled.button`
  border-radius: ${(props) => props.borderRadius}%;
  border: ${(props) => props.borderSize}px solid greenyellow;
  padding: ${(props) => props.verticalSize}px
    ${(props) => props.horizontalSize}px;
  color: white;
  background: green;
  font-size: ${(props) => props.fontSize}px;
  display: inline-block;
  cursor: pointer;
`;

export default ButtonPreview;
