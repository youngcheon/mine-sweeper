import {styled} from 'styled-components';

export const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(15px);
    z-index: 11;
`;

export const Container = styled.div`
    font-family: 'DungGeunMo';
    background-color: #c0c0c0;
    display: flex;
    height: fit-content;
    width: fit-content;
    min-height: 100px;
    min-width: 300px;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    display: flex;
    margin: auto;
    font-size: 30px;
    text-align: center;
    padding: 20px;
`;

export const ModalContent = styled.div`
    display: flex;
    margin: 10px;
    flex-direction: column;
    gap: 10px;
    font-size: 20px;
    input {
        width: 20%;
        font-family: 'DungGeunMo';
        font-size: 20px;
    }
`;

export const ConfirmButton = styled.div`
    display: flex;
    margin: auto;
    font-size: 20px;
    background-color: black;
    border-radius: 5px;
    padding: 5px;
    color: white;
    margin: 10px;
`;
