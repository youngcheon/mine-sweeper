import {TEXT_COLOR} from '@/constant';
import {CELL_STATUS, ICell} from '@/types/common';
import {css, styled} from 'styled-components';

export const Box = styled.div<Partial<ICell>>`
    width: 30px;
    height: 30px;
    background-color: #c0c0c0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    user-select: none;
    border: 1px solid grey;
    font-family: 'DungGeunMo';

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

    ${({status}) =>
        typeof status === 'number' &&
        css`
            font-size: 30px;
            color: ${TEXT_COLOR[status]};
            font-weight: 900;
        `}

    ${({status}) =>
        status === CELL_STATUS.CLICKED_MINE &&
        css`
            background-color: red;
        `}
`;
