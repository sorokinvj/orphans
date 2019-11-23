import styled from 'styled-components';

export const CardWrap = styled.div`
    border: 1px solid rgba(0,0,0,0.5);
    height: ${props => (props.size === 'big' ? '41rem' : '36rem')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${props.background})`};
    background-size: cover;
    margin-top: 6rem;
    padding: 0 3rem;
    @media (max-width: 415px)  {
        height: 31rem;
        margin-top: 3rem;
    }
`;

export const Title = styled.h2`
    font-family: 'Charter', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 3.2rem;
    line-height: 4rem;
    text-align: center;
    color: white;
    background: #b10007;
    padding: 0 1rem;
    @media (max-width: 768px) {
        font-size: 2.4rem;
        line-height: 3.2rem;
    }
`;


export const CaseTitle = styled.h2`
    font-family: 'Charter', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    line-height: 3.4rem;
    color: #000000;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    width: 80%;
    text-align: center;
`;

export const Lead = styled.p`
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.4rem;
    width: 80%;
    text-align: center;
    color: #000000;
    margin-top: 1.2rem;
`;

export const StoryWrap = styled.div`
    border: 1px solid rgba(0,0,0,0.5);
    height: 45rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: ${props => `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${props.background})`};
    background-size: cover;
    margin-top: 6rem;
    padding: 0 3rem;
    @media (max-width: 768px) {
        height: 36rem;
    }
    @media (max-width: 415px)  {
        margin-top: 3rem;
    }
`;

export const Name = styled.h4`
    font-family: 'Charter', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 2.6rem;
    line-height: 4rem;
    text-align: center;
    color: #DE040D;
    margin-top: 2rem;
    @media (max-width: 768px) {
        font-size: 2rem;
        line-height: 3rem;
    }
`;

export const Action = styled.h4`
    font-family: 'Charter', serif;
    font-style: normal;
    font-size: 2.6rem;
    line-height: 4rem;
    text-align: center;
    color: #000000;
    @media (max-width: 768px) {
        font-size: 2rem;
        line-height: 3rem;
    }
`;

export const Place = styled.p`
    font-family: Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.2rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.8);
    position: absolute;
    bottom: 3rem;
`;


export const ExpertPosition = styled.p`
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.6rem;
    text-align: center;
    color: #000000;
`;

export const ExpertName = styled.p`
    ${ExpertPosition} {
        font-weight: bold;
    }
`;

export const ExpertQuote = styled.h4`
    ${Action} {
        font-weight: bold;
    }
`;
