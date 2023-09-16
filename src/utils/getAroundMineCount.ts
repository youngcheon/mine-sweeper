import {DIRECTIONS} from '@/constant';
import {Board, CELL_STATUS, Position} from '@/types/common';

/**
 * @NOTE : 한 지점을 기준으로 주변의 지뢰를 찾는 함수.
 */
export default function getAroundMineCount(board: Board, position: Position) {
    const height = board.length;
    const width = board[0].length;

    let mineCount = 0;

    for (const [dx, dy] of DIRECTIONS) {
        const newX = position.x + dx;
        const newY = position.y + dy;

        if (newX >= 0 && newX < width && newY >= 0 && newY < height) {
            if (board[newY][newX].status === CELL_STATUS.MINE) {
                mineCount++;
            }
        }
    }

    return mineCount;
}
