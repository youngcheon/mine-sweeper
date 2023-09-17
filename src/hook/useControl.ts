/* eslint-disable react-hooks/exhaustive-deps */
import {RootState} from '@store/index';
import * as game from '@store/modules/game';
import {useCallback} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

export default function useControl() {
    const gameState = useSelector((state: RootState) => state.game, shallowEqual);
    const dispatch = useDispatch();

    const start = useCallback((width: number, height: number, mineCount: number) => {
        dispatch(game.start({width, height, mineCount}));
    }, []);

    const click = useCallback((x: number, y: number) => {
        dispatch(game.click({x, y}));
    }, []);

    const rightClick = useCallback((x: number, y: number) => {
        dispatch(game.rightClick({x, y}));
    }, []);

    const increaseTimer = useCallback(() => {
        dispatch(game.increaseTimer());
    }, []);

    return {gameState, start, click, rightClick, increaseTimer} as const;
}
