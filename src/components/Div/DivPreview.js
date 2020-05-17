import styled from "styled-components";

const DivPreview = styled.div`
  border-radius: ${(props) => props.borderRadius}%;
  border: ${(props) => props.borderSize}px solid greenyellow;
  padding: ${(props) => props.verticalSize}px
    ${(props) => props.horizontalSize}px;
  color: white;
  background: #2196fc;
  font-size: ${(props) => props.fontSize}px;
  display: inline-block;
  cursor: pointer;
`;

export default DivPreview;
