import {CELL_STATUS, ControlProps, GAME_STATUS, Position} from '@/types/common';
import createBoard from '@/utils/createBoard';
import createMine from '@/utils/createMine';
import openEmptyCells from '@/utils/openEmptyCells';
import {PayloadAction, configureStore, createSlice} from '@reduxjs/toolkit';

const initialState: ControlProps = {
    board: [],
    width: 8,
    height: 8,
    mineCount: 10,
    status: GAME_STATUS.READY,
    timer: 0,
    openCount: 0,
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
        /**
         * @NOTE : 좌클릭을 했을때 사용하는 리듀서
         */
        click: (state, action: PayloadAction<{position: Position}>) => {
            const {position} = action.payload;
            const currentCell = state.board[position.y][position.x];

            if (currentCell.status === CELL_STATUS.FLAG || currentCell.status === CELL_STATUS.UNKNOWN) {
                return;
            }

            if (state.status === GAME_STATUS.READY) {
                // @NOTE : 첫 클릭시 지뢰 생성
                state.board = createMine({board: state.board, mineCount: state.mineCount, currentPosition: position});
                state.openCount = openEmptyCells(state.board, position, state.openCount);

                state.status = GAME_STATUS.PLAYING;
            } else if (state.status === GAME_STATUS.PLAYING) {
                // @NOTE : 첫클릭 아닐경우

                // @NOTE : 지뢰밟음 - 게임 종료
                if (currentCell.isMine) {
                    state.status = GAME_STATUS.LOSE;
                    return;
                } else {
                    state.openCount = openEmptyCells(state.board, position, state.openCount);
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
