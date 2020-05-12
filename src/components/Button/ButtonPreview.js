import styled from "styled-components";

const ButtonPreview = styled.button`
    border-radius: ${props => props.borderRadius}%;
    border: solid ${props => props.borderSize}px greenyellow;
    padding: ${props => props.verticalSize}px ${props => props.horizontalSize}px;
    color: white;
    background: green;
    font-size: 1rem;
`;

export default ButtonPreview;