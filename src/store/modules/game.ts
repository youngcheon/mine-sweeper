import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ControlProps, GAME_STATUS, Position, CELL_VALUE} from '@/types/common';
import createBoard from '@utils/createBoard';
import createMine from '@utils/createMine';
import openEmptyCells from '@utils/openEmptyCells';
import validateSetting from '@utils/validateSetting';

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

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        /**
         * @NOTE : 게임을 시작할 때 사용하는 리듀서
         */
        start: (_state, action: PayloadAction<{width: number; height: number; mineCount: number}>) => {
            // 적절한 게임 세팅인지 검사합니다.
            if (!validateSetting(action.payload)) {
                alert('적절하지 않은 설정 값입니다.\n 가로,세로 : 8 ~ 50 \n 지뢰 갯수 : 1 ~ 셀 갯수의 1/3');
                return;
            }
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

            if (currentCell.$value === CELL_VALUE.FLAG || currentCell.$value === CELL_VALUE.UNKNOWN) {
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
                    currentCell.$isOpened = true;
                    currentCell.$value = CELL_VALUE.CLICKED_MINE;
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
        /**
         * @NOTE : 우클릭 (깃발) 로직 담당 리듀서
         */
        rightClick: (state, action: PayloadAction<Position>) => {
            const {x, y} = action.payload;
            const currentCell = state.board[y][x];

            switch (currentCell.$value) {
                case CELL_VALUE.NONE:
                    if (state.flagCount === 0) {
                        return;
                    }
                    currentCell.$value = CELL_VALUE.FLAG;
                    state.flagCount--;
                    break;
                case CELL_VALUE.FLAG:
                    state.flagCount++;
                    currentCell.$value = CELL_VALUE.UNKNOWN;
                    break;
                case CELL_VALUE.UNKNOWN:
                    currentCell.$value = CELL_VALUE.NONE;
                    break;
                default:
                    break;
            }
        },
        /**
         * @NOTE : 타이머 1증가 리듀서
         */
        increaseTimer: (state) => {
            state.timer++;
        },
    },
});

export const {start, click, rightClick, increaseTimer} = gameSlice.actions;
