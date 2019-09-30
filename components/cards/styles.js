import styled from 'styled-components';

export const Card = styled.div`
    border: 2px solid black;
    height: 45rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 5rem;

    h1 {
        font-family: 'PT Serif', serif;
        font-size: 2.6rem;
        line-height: 3rem;
        font-weight: 600;
        color: #221E22;
        text-decoration: none;
        margin: 0;
        padding: 0 3rem;
    }

    .lead {
        font-family: 'PT Sans', sans-serif;
        font-size: 1.6rem;
        line-height: 2.3rem;
        color: #9a9a9a;
        text-decoration: none;
        margin: 0;
        padding: 2rem 3rem 3rem;
    }
`;


export const Wallpaper = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
    justify-self: flex-end;
    overflow: hidden;
    background: url('${props => props.src}');
    background-size: cover;
`;
