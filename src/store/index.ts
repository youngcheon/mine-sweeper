import {ControlProps, GAME_STATUS} from '@/types/common';
import createBoard from '@/utils/createBoard';
import {PayloadAction, configureStore, createSlice} from '@reduxjs/toolkit';

const initialState: ControlProps = {
    board: [],
    width: 8,
    height: 8,
    mineCount: 10,
    status: GAME_STATUS.READY,
    timer: 0,
};

const slice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        /**
         * @NOTE : 게임을 시작할 때 사용하는 리듀서
         */
        start: (state, action: PayloadAction<{width: number; height: number; mineCount: number}>) => {
            const {width, height, mineCount} = action.payload;
            return {...state, width, height, mineCount, board: createBoard({width, height})};
        },
    },
});

const store = configureStore({
    reducer: slice.reducer,
});

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const {start} = slice.actions;

export default store;
