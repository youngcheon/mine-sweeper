import useControl from '@hook/useControl';
import * as S from './styles';
import Cell from '@components/Cell';
import {useEffect} from 'react';

export default function Board() {
    const {gameState, start} = useControl();
    const {board, height} = gameState;

    useEffect(() => {
        start(8, 8, 10);
    }, []);

    return <S.Grid cols={height}>{board.map((row, i) => row.map((cell, j) => <Cell key={`${i}-${j}`} {...cell} />))}</S.Grid>;
}
