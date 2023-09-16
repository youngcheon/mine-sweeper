import useControl from '@hook/useControl';
import * as S from './styles';
import Cell from '@components/Cell';
import {GAME_STATUS} from '@/types/common';

export default function Board() {
    const {gameState} = useControl();
    const {board, height} = gameState;
    const isOver = [GAME_STATUS.LOSE, GAME_STATUS.WIN].includes(gameState.status);

    return (
        <S.Grid cols={height} isOver={isOver}>
            {board.map((row, i) => row.map((cell, j) => <Cell key={`${i}-${j}`} {...cell} />))}
        </S.Grid>
    );
}
