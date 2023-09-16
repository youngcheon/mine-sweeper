import {CELL_STATUS, GAME_STATUS, ICell} from '@/types/common';
import * as S from './styles';
import getCellText from '@utils/getCellText';
import useControl from '@hook/useControl';
import {MouseEvent} from 'react';

export const Cell: React.FC<ICell> = ({x, y, status, ...props}) => {
    const {gameState, click, rightClick} = useControl();

    const handleLeftClick = () => click(x, y);
    const handleRightClick = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        rightClick(x, y);
    };

    if (gameState.status === GAME_STATUS.LOSE && props.$isMine && status !== CELL_STATUS.CLICKED_MINE) {
        return <S.Box>💣</S.Box>;
    }

    return (
        <S.Box {...props} onClick={handleLeftClick} onContextMenu={handleRightClick} status={status}>
            {props.$isOpened && getCellText(status)}
        </S.Box>
    );
};

export default Cell;
