import {Board, Position} from '@/types/common';

/**
 * @NOTE : 한 지점을 기준으로 주변의 지뢰를 찾는 함수.
 */
export default function getAroundMineCount(board: Board, position: Position) {
    const height = board.length;
    const width = board[0].length;

    let mineCount = 0;

    const directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];

    for (const [dx, dy] of directions) {
        const newX = position.x + dx;
        const newY = position.y + dy;

        if (newX >= 0 && newX < width && newY >= 0 && newY < height) {
            if (board[newY][newX].isMine) {
                mineCount++;
            }
        }
    }

    return mineCount;
}
