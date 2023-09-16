import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    background-color: #c0c0c0;
    border-radius: 8px;
    padding: 20px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #c0c0c0;
    padding: 10px;
    border-top: 3px solid white;
    border-left: 3px solid white;
    border-right: 3px solid darkslategray;
    border-bottom: 3px solid darkslategray;
`;
