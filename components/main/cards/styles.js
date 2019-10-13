import styled from 'styled-components';

export const CardWrap = styled.div`
    border: 1px solid rgba(0,0,0,0.5);
    height: 41rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${props.background})`};
    background-size: cover;
    margin-top: 6rem;
    padding: 0 3rem;
`;

export const Title = styled.h2`
    font-family: 'Charter', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 3.2rem;
    line-height: 4rem;
    text-align: center;
    color: white;
    background: #DE040D;
    padding: 0 1.7rem;
`;


export const CaseTitle = styled.span`
    font-family: 'Charter', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 2.6rem;
    line-height: 3.4rem;
    color: #000000;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    display: inline;
`;

export const Lead = styled.p`
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.4rem;
    width: 80%;
    /* identical to box height, or 112% */
    text-align: center;
    color: #000000;
    margin-top: 1.2rem;
`;
