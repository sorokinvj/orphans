import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Styled = styled.div`
  margin-top: 6rem;
  .video-wrap {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
    div,
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    div {
      a {
        position: absolute;
        height: 100%;
        top: 0;
        h1,
        p {
          display: none;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  h3 {
    font-family: "PT Sans";
    font-weight: bold;
    font-size: 2.2rem;
    line-height: 3rem;
    color: #000000;
    margin-top: 3rem;
  }

  p {
    font-family: "PT Sans";
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.3rem;
    color: #000000;
    margin-top: 1.5rem;
  }
`;

const Video = ({ video }) => (
  <Styled>
    <div
      dangerouslySetInnerHTML={{ __html: video.data.url.html }}
      className="video-wrap"
    />
    <h3>{video.data.title[0].text}</h3>
    <p>{video.data.description[0].text}</p>
  </Styled>
);

Video.propTypes = {};

export default Video;
