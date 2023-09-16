import {TEXT_COLOR} from '@/constant';
import {CELL_VALUE, ICell} from '@/types/common';
import {css, styled} from 'styled-components';

export const Box = styled.div<Partial<ICell>>`
    width: 30px;
    height: 30px;
    background-color: ${(props) => (props.$value === CELL_VALUE.CLICKED_MINE ? 'red' : '#c0c0c0')};
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

    ${({$value}) =>
        typeof $value === 'number' &&
        css`
            font-size: 30px;
            color: ${TEXT_COLOR[$value]};
            font-weight: 900;
        `}
`;
