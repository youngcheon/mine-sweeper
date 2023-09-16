import createBoard from '@utils/createBoard';
import createMine from '@utils/createMine';
import openEmptyCells from '@utils/openEmptyCells';
import {PayloadAction, configureStore, createSlice} from '@reduxjs/toolkit';
import {CELL_STATUS, ControlProps, GAME_STATUS, Position} from '@/types/common';

const initialState: ControlProps = {
    board: createBoard({width: 8, height: 8}),
    width: 8,
    height: 8,
    mineCount: 10,
    status: GAME_STATUS.READY,
    timer: 0,
    openCount: 0,
    flagCount: 10,
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
            return {
                board: createBoard({width, height}),
                timer: 0,
                openCount: 0,
                status: GAME_STATUS.READY,
                width,
                height,
                mineCount,
                flagCount: mineCount,
            };
        },
        /**
         * @NOTE : 좌클릭을 했을때 사용하는 리듀서
         */
        click: (state, action: PayloadAction<Position>) => {
            const {x, y} = action.payload;
            const currentCell = state.board[y][x];

            if (currentCell.status === CELL_STATUS.FLAG || currentCell.status === CELL_STATUS.UNKNOWN) {
                return;
            }

            if (state.status === GAME_STATUS.READY) {
                // @NOTE : 첫 클릭시 지뢰 생성
                state.board = createMine({board: state.board, mineCount: state.mineCount, currentPosition: {x, y}});
                state.openCount = openEmptyCells(state.board, {x, y}, state.openCount);

                state.status = GAME_STATUS.PLAYING;
            } else if (state.status === GAME_STATUS.PLAYING) {
                // @NOTE : 첫클릭 아닐경우

                // @NOTE : 지뢰밟음 - 게임 종료
                if (currentCell.$isMine) {
                    state.status = GAME_STATUS.LOSE;
                    return;
                } else {
                    state.openCount = openEmptyCells(state.board, {x, y}, state.openCount);
                }

                // @NOTE : 승리조건
                if (state.mineCount === state.width * state.height - state.openCount) {
                    state.status = GAME_STATUS.WIN;
                    return;
                }
            }
        },
    },
});

const store = configureStore({
    reducer: slice.reducer,
});

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const {start, click} = slice.actions;

export default store;
