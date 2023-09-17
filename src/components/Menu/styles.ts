import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    font-family: 'DungGeunMo';
    font-weight: 500;
    font-size: 15px;
    padding-bottom: 10px;
`;

export const Dropdown = styled.div`
    position: absolute;
    top: 20px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: fit-content;
    border: 1px solid black;
    box-shadow: 3px 3px 3px grey;
    background-color: #c0c0c0;
    z-index: 10;

    p {
        border-bottom: 1px solid black;
        padding: 5px;
    }
`;
