import styled from 'styled-components';

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
    font-family: 'Charter', serif;
    color: black;
  }
  .post-lead {
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 4.6rem;
    font-weight: normal;
    font-style: italic;
    font-family: 'PT Sans', sans-serif;
    color: #221E22;
  }
  .date {
    margin-top: 1rem;
    text-transform: uppercase;
    font-family: 'PT Sans', sans-serif;
    font-size: 1.4rem;
    color: #F74B01;
  }
  .content {

    margin-top: 3rem;
    p {
        font-family: 'PT Serif', sans-serif;
        font-size: 1.8rem;
        line-height: 3rem;
        color: #221E22;
        margin-bottom: 2.6rem;
    }
    h2 {
        margin: 1rem 0;
        font-size: 2.5rem;
        line-height: 3.5rem;
        font-weight: bold;
        font-family: 'Charter', serif;
        color: black;
    }
    h3 {
      font-family: 'PT Sans', sans-serif;
      font-size: 3rem;
      font-weight: bold;
      line-height: 3.6rem;
      color: #221E22;
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
`;

export default Post;
