import React from "react";
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 3rem;
    font-family: 'Roboto Mono', monospace;
    text-align: center;
    font-weight: 700;
`;

function Header() {
    return(
        <Title>
            CSS GENERATOR
        </Title>
    );
}

export default Header;