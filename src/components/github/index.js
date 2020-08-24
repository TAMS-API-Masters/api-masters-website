import React from 'react';
import styled from 'styled-components';
import constants from '../../constants';
import BigButton from '../big-button';
import github from './github.png'

export default function GitHub(props) {
    return (
        <GitHubDiv>
            <BigButton
                text={"Visit our GitHub"}
                color={constants.DISCORD_BLUE}
                image={github}
                link={"http://www.github.com"}
                style={{marginTop: "60px"}}
            />
            <Message>
                We encourage you to join our GitHub organization where you can see all of our example projects and contribute your own cool API projects!
            </Message>
        </GitHubDiv>
    )
}

const Message = styled.span`
    color: ${constants.BEIGE};
    font-weight: 700;
    font-size: 24px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
    margin-top: 100px;
`

const GitHubDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`