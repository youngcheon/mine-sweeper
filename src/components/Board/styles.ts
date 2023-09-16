import styled from 'styled-components';

export const Grid = styled.div<{cols: number}>`
    display: grid;
    grid-template-columns: ${(props) => `repeat(${props.cols}, 30px)`};
    gap: 2px;
    padding: 5px;

    border-top: 3px solid darkslategray;
    border-left: 3px solid darkslategray;
    border-right: 3px solid white;
    border-bottom: 3px solid white;
`;
