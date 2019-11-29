import styled from "styled-components";

const Post = styled.div`
  padding: 10rem 0;
  .hero {
    img {
      width: 100%;
    }
  }
  .title {
    margin-top: 2rem;
    font-size: 3.7rem;
    line-height: 4.6rem;
    font-weight: bold;
    font-family: "Charter", serif;
    color: black;
  }
  .post-lead,
  .sending-status {
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 3rem;
    margin-bottom: 1rem;
    font-weight: normal;
    font-style: italic;
    font-family: "PT Sans", sans-serif;
    color: #221e22;
    &.error {
      color: #f74b01;
    }
  }
  .date {
    margin-top: 1rem;
    text-transform: uppercase;
    font-family: "PT Sans", sans-serif;
    font-size: 1.4rem;
    color: #f74b01;
  }
  .content {
    margin-top: 3rem;
    p {
      font-family: "PT Serif", sans-serif;
      font-size: 1.8rem;
      line-height: 3rem;
      color: #221e22;
      margin-bottom: 2.6rem;
    }
    h1,
    h2,
    strong {
      margin: 1rem 0;
      font-size: 2.5rem;
      line-height: 3.5rem;
      font-weight: bold;
      font-family: "Charter", serif;
      color: black;
    }
    h3 {
      font-family: "PT Sans", sans-serif;
      font-size: 3rem;
      font-weight: bold;
      line-height: 3.6rem;
      color: #221e22;
      margin: 3.5rem 0 2.6rem 0;
    }
    img {
      width: 100%;
    }
    .embed {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      padding-top: 25px;
      height: 0;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  a {
    text-decoration: none;
    padding-bottom: 0;
    border-bottom: 1px solid #b10007;
    /* box-shadow: inset 0 -1px 0 #b10007; */
  }

  pre {
    /* Цитаты */
    font-size: 2.4rem;
    white-space: normal;
    text-align: center;
    font-style: italic;
    font-family: "PT Serif";
    margin: 4rem 2rem;
    @media (max-width: 415px) {
      margin: 4rem 1rem;
    }
  }
  .call-to-action {
    margin: 1rem 0;
    font-size: 2.5rem;
    line-height: 3.5rem;
    font-weight: bold;
    font-family: "Charter", serif;
    color: black;
  }

  .feedback-form {
    input,
    textarea,
    button {
      border: 1px solid black;
      width: 100%;
      padding: 1rem;
      margin-top: 2rem;
      font-family: "PT Serif", sans-serif;
      font-size: 1.8rem;
      line-height: 3rem;
      color: #221e22;
      background: white;
    }
    button {
      width: 20rem;
    }
    textarea {
      height: 30rem;
    }
  }
`;

export default Post;
