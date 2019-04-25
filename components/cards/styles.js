import styled from 'styled-components';

export const Card = styled.div`
    box-shadow: 2px 2px 10px 2px #C6C6C6;
    height: 45rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 5rem;
`;

export const Title = styled.h2`
    font-family: 'PT Serif';
    font-size: 2.2rem;
    line-height: 3rem;
    color: #221E22;
    text-decoration: none;
    margin: 0;
    padding: 3rem 3rem 0 3rem;
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
