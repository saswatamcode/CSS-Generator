import styled from "styled-components";

const LinkPreview = styled.a`
  margin-top: 7rem;
  color: ${(props) => props.linkColor};
  font-size: ${(props) => props.fontSize}px;
  display: inline-block;
  cursor: pointer;
  text-decoration: ${(props) => props.underline};
  :hover {
    color: ${(props) => props.linkHoverColor};
  }
  :visited {
    color: ${(props) => props.linkVisitedColor};
  }
`;

export default LinkPreview;
