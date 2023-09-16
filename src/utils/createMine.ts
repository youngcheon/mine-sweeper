import {ICell, Position} from '@/types/common';
import {getRandomNumber} from './getRandomNumber';
import {isEqual} from 'lodash';

interface CreateMineProps {
    board: ICell[][];
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

        if (board[y][x].$isMine) {
            continue;
        }

        /**
         * @NOTE 첫 시작부터 지뢰를 선택하지 않기위해 클릭한 위치를 제외하고 생성합니다.
         */
        if (!isEqual(currentPosition, {x, y})) {
            board[y][x].$isMine = true;
            remainMineCount--;
        }
    }
    return board;
};

export default createMine;
