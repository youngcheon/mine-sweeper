import {CELL_VALUE, GAME_STATUS, ICell} from '@/types/common';
import * as S from './styles';
import getCellText from '@utils/getCellText';
import useControl from '@hook/useControl';
import {MouseEvent} from 'react';

export const Cell: React.FC<ICell> = ({x, y, ...props}) => {
    const {gameState, click, rightClick} = useControl();

    const handleLeftClick = () => click(x, y);

    const handleRightClick = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        rightClick(x, y);
    };

    if (gameState.status === GAME_STATUS.LOSE && props.$isMine && props.$value !== CELL_VALUE.CLICKED_MINE) {
        return <S.Box>💣</S.Box>;
    }

    return (
        <S.Box {...props} onClick={handleLeftClick} onContextMenu={handleRightClick} $value={props.$value}>
            {getCellText(props.$value)}
        </S.Box>
    );
};

export default Cell;
