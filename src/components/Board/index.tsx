import useControl from '@hook/useControl';
import * as S from './styles';
import Cell from '@components/Cell';

export default function Board() {
    const {gameState} = useControl();
    const {board, height} = gameState;

    return <S.Grid cols={height}>{board.map((row, i) => row.map((cell, j) => <Cell key={`${i}-${j}`} {...cell} />))}</S.Grid>;
}
