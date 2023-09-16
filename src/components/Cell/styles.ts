import {ICell} from '@/types/common';
import {css, styled} from 'styled-components';

export const Box = styled.div<Partial<ICell>>`
    width: 30px;
    height: 30px;
    background-color: #c0c0c0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    user-select: none;
    border: 1px solid grey;

    ${({$isOpened}) =>
        !$isOpened &&
        css`
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
        `}
`;
