/* eslint-disable react-hooks/exhaustive-deps */
import * as store from '@/store';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function useControl() {
    const gameState = useSelector((state: store.RootSate) => state);
    const dispatch = useDispatch();

    const start = useCallback((width: number, height: number, mineCount: number) => {
        dispatch(store.start({width, height, mineCount}));
    }, []);

    const click = useCallback((x: number, y: number) => {
        dispatch(store.click({x, y}));
    }, []);

    const rightClick = useCallback((x: number, y: number) => {
        dispatch(store.rightClick({x, y}));
    }, []);

    const increaseTimer = useCallback(() => {
        dispatch(store.increaseTimer());
    }, []);

    return {gameState, start, click, rightClick, increaseTimer} as const;
}
