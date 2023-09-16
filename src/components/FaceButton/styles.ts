import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 30px;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-top: 5px solid white;
    border-left: 5px solid white;
    border-right: 5px solid darkslategray;
    border-bottom: 5px solid darkslategray;

    &:active {
        border-top: 5px solid darkslategray;
        border-left: 5px solid darkslategray;
        border-right: 5px solid white;
        border-bottom: 5px solid white;
    }
`;

export const Icon = styled.span`
    display: flex;
`;
