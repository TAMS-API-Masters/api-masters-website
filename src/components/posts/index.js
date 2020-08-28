import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import constants from "../../constants";
import ContentBox from "../content-box";
import clock from "./clock.png";
import ReactMarkdown from "react-markdown";
import previewPost from "./posts/1";
import { FaChevronRight } from "react-icons/fa";
import DividingLine from "../dividing-line";

function numbersUntil(num) {
  let arr = []
  for (let i = (num - 1); i > 0; --i) {
    arr.push(i);
  }
  return arr;
}

function getMostRecentPostNum() {
  let postNum = 1;
  try {
    while (require(`./posts/${postNum}.js`)) {
      postNum++;
    }
  } catch (err) {
    // do nothing
  }
  return postNum - 1;
}

export default function Posts(props) {
  const postNum = getMostRecentPostNum()

  return (
    <ContentBox>
      <PostPreview postNum={postNum} featured/>
      {
        numbersUntil(postNum).map(num => {
          return <PostPreview postNum={num} />
        })
      }
    </ContentBox>
  );
}

function PostPreview(props) {
  const postNum = props.postNum;
  const featured = props.featured;
  const [hovered, setHovered] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    import(`./posts/${postNum}`).then((data) => {
      const { title, subtitle, date, content } = data.default;
      setTitle(title);
      setSubtitle(subtitle);
      setDate(date);
    })
  })

  const getMostOfTitle = (str) => {
    const words = str.split(" ");
    return `${words.slice(0, words.length - 1).join(" ")} `;
  };

  const getLastWord = (str) => {
    const words = str.split(" ");
    return words[words.length - 1];
  };

  return (
    <PreviewDiv>
      <PreviewTitle
        to={`posts/${postNum}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        featured={featured}
      >
        <h1>
          {getMostOfTitle(title)}
          <div style={{display: "inline-block"}}>
            {getLastWord(title)}
            <RightChevron hovered={hovered} />
          </div>
        </h1>
      </PreviewTitle>
      <PreviewSubtitle featured={featured}>{subtitle}</PreviewSubtitle>
      <DateSection date={date} />
      <DividingLine style={{ marginTop: "20px" }} />
      {featured && <FeaturedBadge />}
    </PreviewDiv>
  );
}

function FeaturedBadge() {
  return (
    <BadgeDiv>
      Featured! 🌟
    </BadgeDiv>
  )
}

const BadgeDiv = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 10px 20px;
  border: 4px solid ${constants.MAROON};
  border-radius: 20px;
  background-color: ${constants.BEIGE}80;
  transform: rotate(12deg);
  font-weight: 500;
  box-shadow: 6px 10px 19px -9px rgba(0,0,0,0.5);
  font-size: 20px;
  color: ${constants.MAROON};
`

const RightChevron = styled(FaChevronRight)`
  margin-left: 10px;
  ${(props) =>
    props.hovered && "animation: up-down ease-in-out 0.5s infinite alternate"};

  @keyframes up-down {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-7px);
    }
  }
`;

const PreviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const PreviewTitle = styled(Link)`
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  h1 {
    font-size: ${props => props.featured ? '44px' : '28px'};
  }
`;

const PreviewSubtitle = styled.h2`
  color: ${constants.SUBTITLE_COLOR};
  margin-top: 2px;
`;

export function PostAt(props) {
  const postNumber = props.match.params.postNumber;
  const history = useHistory();
  const [post, setPost] = useState(undefined);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    import(`./posts/${postNumber}`)
      .then((postObj) => {
        setPost(postObj);
        setLoaded(true);
      })
      .catch((err) => {
        history.push("/error");
      });
  }, [postNumber]);

  return (
    <ContentBox>{loaded && <PostRepresentation post={post} />}</ContentBox>
  );
}

function PostRepresentation(props) {
  const post = props.post;
  const { title, subtitle, date, content } = post.default;
  const [contentString, setContentString] = useState();

  useEffect(() => {
    fetch(content).then((res) => {
      res.text().then((text) => {
        setContentString(text);
      });
    });
  }, [content]);

  return (
    <PostRepDiv>
      <h1>{title}</h1>
      <h2
        style={{
          color: constants.SUBTITLE_COLOR,
        }}
      >
        {subtitle}
      </h2>
      <DateSection date={date} />
      <ReactMarkdown source={contentString} />
    </PostRepDiv>
  );
}

function DateSection(props) {
  const date = props.date;

  return (
    <DateSpan>
      <img src={clock} alt={"clock"} />
      {date}
    </DateSpan>
  );
}

const DateSpan = styled.span`
  img {
    height: 20px;
    margin-right: 10px;
  }

  display: flex;
  align-items: center;
`;

const PostRepDiv = styled.div``;
