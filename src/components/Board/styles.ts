import styled from 'styled-components';

export const Grid = styled.div<{cols: number; $isOver: boolean}>`
    display: grid;
    grid-template-columns: ${(props) => `repeat(${props.cols}, 30px)`};
    padding: 5px;
    pointer-events: ${(props) => props.$isOver && 'none'};

    border-top: 3px solid darkslategray;
    border-left: 3px solid darkslategray;
    border-right: 3px solid white;
    border-bottom: 3px solid white;
`;
