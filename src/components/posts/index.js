import React, { useState, useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';
import styled from "styled-components";
import constants from "../../constants";
import ContentBox from '../content-box';
import clock from './clock.png';
import ReactMarkdown from 'react-markdown';
import previewPost from './posts/1';
import { FaChevronRight } from 'react-icons/fa';
import DividingLine from '../dividing-line';

export default function Posts(props) {

    return (
        <ContentBox>
            <PostPreview post={previewPost} postNum={1}/>
        </ContentBox>
    )
}

function PostPreview(props) {
    const [hovered, setHovered] = useState(false);
    const post = props.post;
    const { title, subtitle, date, content } = post;
    const postNum = props.postNum;

    return (
        <PreviewDiv>
            <PreviewTitle 
                to={`posts/${postNum}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <h1>
                    {title}
                    <RightChevron hovered={hovered}/>
                </h1>
            </PreviewTitle>
            <PreviewSubtitle>{subtitle}</PreviewSubtitle>
            <DateSection date={date} />
            <DividingLine style={{marginTop: "20px"}}/>
        </PreviewDiv>
    )
}

const RightChevron = styled(FaChevronRight)`
    margin-left: 10px;
    ${props => props.hovered && 'animation: up-down ease-in-out 0.5s infinite alternate'};

    @keyframes up-down {
        from {transform: translateY(0px)}
        to {transform: translateY(-7px)}
    }

`

const PreviewDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const PreviewTitle = styled(Link)`
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    h1 {
        font-size: 44px;
    }
`

const PreviewSubtitle = styled.h2`
    color: ${constants.SUBTITLE_COLOR};
    margin-top: 2px;
`


export function PostAt(props) {
    const postNumber = props.match.params.postNumber;
    const history = useHistory();
    const [post, setPost] = useState(undefined);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        import(`./posts/${postNumber}`).then(postObj => {
            setPost(postObj);
            setLoaded(true);
        })
        .catch(err => {
            history.push('/error')
        })
    }, [postNumber]);

    return (
        <ContentBox>
            {loaded && <PostRepresentation post={post} />}
        </ContentBox>
    )
}

function PostRepresentation(props) {
    const post = props.post;
    const { title, subtitle, date, content } = post.default;
    const [contentString, setContentString] = useState()

    useEffect(() => {
        fetch(content).then(res => {
            res.text().then(text => {
                setContentString(text);
            })
        })
    }, [content])

    return (
        <PostRepDiv>
            <h1>{title}</h1>
            <h2 style={{
                color: constants.SUBTITLE_COLOR
            }}>{subtitle}</h2>
            <DateSection date={date} />
            <ReactMarkdown source={contentString} />
        </PostRepDiv>
    )
}

function DateSection(props) {
    const date = props.date;

    return (
        <DateSpan>
            <img src={clock} alt={"clock"} />
            {date}
        </DateSpan>
    )
}

const DateSpan = styled.span`
    img {
        height: 20px;
        margin-right: 10px;
    }

    display: flex;
    align-items: center;
`

const PostRepDiv = styled.div`

`