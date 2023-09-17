import styled from 'styled-components';

export const Grid = styled.div<{cols: number; $isOver: boolean}>`
    display: grid;
    grid-template-columns: ${(props) => `repeat(${props.cols}, 20px)`};
    padding: 5px;
    pointer-events: ${(props) => props.$isOver && 'none'};

    border-top: 2px solid darkslategray;
    border-left: 2px solid darkslategray;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
`;
