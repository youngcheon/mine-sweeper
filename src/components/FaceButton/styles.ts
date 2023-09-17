import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-top: 3px solid white;
    border-left: 3px solid white;
    border-right: 3px solid darkslategray;
    border-bottom: 3px solid darkslategray;

    &:active {
        border-top: 3px solid darkslategray;
        border-left: 3px solid darkslategray;
        border-right: 3px solid white;
        border-bottom: 3px solid white;
    }
`;

export const Icon = styled.span`
    display: flex;
`;
