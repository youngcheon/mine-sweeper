/* eslint-disable @typescript-eslint/no-unused-vars */
import {Board, Position} from '@/types/common';
import getAroundMineCount from './getAroundMineCount';

export default function openEmptyCells(board: Board, position: Position, openCount: number) {
    const currentCell = board[position.y][position.x];
    const height = board.length;
    const width = board[0].length;

    currentCell.status = getAroundMineCount(board, position);
    currentCell.$isOpened = true;
    openCount++;

    if (typeof currentCell.status === 'number' && currentCell.status > 0) {
        return openCount;
    }

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
            const nextCell = board[newY][newX];
            if (nextCell.$isOpened === false && nextCell.$isMine === false) {
                openCount = openEmptyCells(board, {x: newX, y: newY}, openCount);
            }
        }
    }
    return openCount;
}
