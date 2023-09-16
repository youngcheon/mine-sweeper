/* eslint-disable @typescript-eslint/no-unused-vars */
import {Board, Position} from '@/types/common';
import getAroundMineCount from './getAroundMineCount';
import {DIRECTIONS} from '@/constant';

/**
 * @NOTE : 주변의 빈 칸을 다 오픈하는 함수. 주변에 폭탄이 있으면 탐색하지 않습니다.
 */
export default function openEmptyCells(board: Board, position: Position, openCount: number) {
    const currentCell = board[position.y][position.x];
    const height = board.length;
    const width = board[0].length;

    currentCell.$value = getAroundMineCount(board, position);
    currentCell.$isOpened = true;

    let newOpenCount = openCount + 1;

    // @NOTE : 주변에 폭탄이 있으면 탐색을 종료합니다.
    if (currentCell.$value > 0) {
        return newOpenCount;
    }

    for (const [dx, dy] of DIRECTIONS) {
        const newX = position.x + dx;
        const newY = position.y + dy;

        if (newX >= 0 && newX < width && newY >= 0 && newY < height) {
            const nextCell = board[newY][newX];

            if (nextCell.$isOpened === false) {
                /**
                 * @NOTE : 방문하지 않은 경우 탐색을 시작합니다.
                 */
                newOpenCount = openEmptyCells(board, {x: newX, y: newY}, newOpenCount);
            }
        }
    }
    return newOpenCount;
}
