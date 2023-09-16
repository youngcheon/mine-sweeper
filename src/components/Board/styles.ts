import styled from 'styled-components';

export const Grid = styled.div<{cols: number}>`
    display: grid;
    grid-template-columns: ${(props) => `repeat(${props.cols}, 30px)`};
    gap: 2px;
`;
