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

    return {gameState, start} as const;
}
