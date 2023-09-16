import {Board, CELL_STATUS, Position} from '@/types/common';
import {getRandomNumber} from './getRandomNumber';
import isNearby from './isNearby';

interface CreateMineProps {
    board: Board;
    mineCount: number;
    currentPosition: Position;
}

/**
 * @NOTE : 지뢰를 생성하는 함수
 */
const createMine = ({board, mineCount, currentPosition}: CreateMineProps) => {
    let remainMineCount = mineCount;

    while (remainMineCount) {
        const width = board[0].length;
        const height = board.length;

        const x = getRandomNumber(width);
        const y = getRandomNumber(height);

        if (board[y][x].status === CELL_STATUS.MINE) {
            continue;
        }

        /**
         * @NOTE 첫 시작부터 지뢰를 선택하지 않기위해
         *       클릭한 주변의 좌표를 제외하고 지뢰를 생성합니다.
         *       첫 클릭한 지점은 반드시 NONE 상태입니다.
         */
        if (!isNearby(currentPosition, {x, y})) {
            board[y][x].status = CELL_STATUS.MINE;
            remainMineCount--;
        }
    }
    return board;
};

export default createMine;
