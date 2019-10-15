import styled from 'styled-components';
import 'charter-webfont';

const H1 = styled.h1`
    font-family: 'Charter', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 6rem;
    line-height: 5.6rem;
    color: #000000;
    margin-top: 12rem;
    @media (max-width: 768px) {
        font-size: 4.5rem;
        line-height: 4.5rem;
    }
    @media (max-width: 415px) {
        margin-bottom: 6rem;

    }
`;

export default H1;
