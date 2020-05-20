import React from "react";
import styled from "styled-components"

const Tab = styled.button`
    background-color: #cb4e4e;
    color: #fff;
    border: none;
    border-radius: 1rem;
    padding: 1.2rem 2rem;
    font-family: 'Roboto Mono', monospace;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    :focus {
        outline: none;
    }
`;

const TabContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    padding: 2rem;
`;

function Tabs(props) {
    return(
        <div className='tabs'>
            <TabContainer>
                <Tab onClick={() => props.switchFunction('btn')}>Style a button</Tab>
                <Tab onClick={() => props.switchFunction('div')}>Style a div</Tab>
                <Tab onClick={() => props.switchFunction('link')}>Style a link</Tab>
            </TabContainer>
        </div>
    );
}

export default Tabs;