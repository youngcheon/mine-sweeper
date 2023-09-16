import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    font-family: 'DungGeunMo';
    font-weight: 500;
    font-size: 20px;
    padding-block: 10px;
`;

export const Dropdown = styled.div`
    position: absolute;
    top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    height: fit-content;
    width: fit-content;
    border: 1px solid black;
    box-shadow: 3px 3px 3px grey;
    background-color: #c0c0c0;
    z-index: 999;
`;
