import React from 'react';
import styled from 'styled-components';
import constants from '../../constants';

export default function BigButton(props) {
    const text = props.text;
    const color = props.color;
    const image = props.image;
    const link = props.link;

    return (
        <BigButtonLink color={color} href={link} style={props.style}>
            <img src={image} />
            <div>
                {text}
                {props.children}
            </div>
        </BigButtonLink>
    )
}

const BigButtonLink = styled.a`
    width: 400px;
    background-color: ${constants.THEME_GRAY};
    display: flex;
    align-items: center;
    color: ${props => props.color};
    font-weight: 600;
    font-size: 30px;
    padding: 10px 15px;
    border-radius: 60px;
    box-shadow: 0px 10px 9px 0px rgba(0,0,0,0.37);
    text-decoration: none;
    position: relative;

    //Media query to adjust size of Discord and Facebook links
    @media screen and (max-width: 767px) {
        width: 300px
    }

    img {
        width: 105px;
        height: 105px;
    }

    div {
        margin-left: 10px;
    }

    &:hover {
        box-shadow: none;
        cursor: pointer;
    }
`