import styled from 'styled-components';

const Styled = styled.div`
    padding-bottom: 10rem;
    h1 {
        margin-bottom: 10rem;
    }
`;

export const Member = styled.div`
    text-align: center;
    .userpic {
        border-radius: 50%;
        margin-bottom: 4rem;
    }
    .name {
        font-family: PT Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 2.4rem;
        line-height: 1;
        text-align: center;
        margin-bottom: 2rem;
    }
    .position {
        font-family: PT Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 2rem;
        line-height: 1;
        text-align: center;
    }
`;

export default Styled;