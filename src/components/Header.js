import React from "react";
import styled from 'styled-components'

const Title = styled.h1`
    font-family: 'Roboto Mono', monospace,
    text-align: center;
`;

function Header() {
    return(
        <Title>
            CSS Generator
        </Title>
    );
}

export default Header;