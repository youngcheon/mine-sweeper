import {TEXT_COLOR} from '@/constant';
import {CELL_VALUE, ICell} from '@/types/common';
import {css, styled} from 'styled-components';

export const Box = styled.div<Partial<ICell>>`
    width: 20px;
    height: 20px;
    background-color: ${(props) => (props.$value === CELL_VALUE.CLICKED_MINE ? 'red' : '#c0c0c0')};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    user-select: none;
    border: 1px solid grey;
    font-family: 'DungGeunMo';

    ${({$isOpened}) =>
        !$isOpened &&
        css`
            border-top: 2px solid white;
            border-left: 2px solid white;
            border-right: 2px solid darkslategray;
            border-bottom: 2px solid darkslategray;

            &:active {
                border-top: 2px solid darkslategray;
                border-left: 2px solid darkslategray;
                border-right: 2px solid white;
                border-bottom: 2px solid white;
            }
        `}

    ${({$value}) =>
        typeof $value === 'number' &&
        css`
            font-size: 20px;
            color: ${TEXT_COLOR[$value]};
            font-weight: 900;
        `}
`;
