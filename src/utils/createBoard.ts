import {Board, CELL_VALUE} from '@/types/common';

interface CreateBoardProps {
    width: number;
    height: number;
}

/**
 * @NOTE : 초기 게임판을 만드는 함수. 지금 지뢰를 만들지 않고 클릭시에 만들도록 한다.
 */
const createBoard = ({width, height}: CreateBoardProps) => {
    const board: Board = [];

    for (let y = 0; y < height; y++) {
        const row: Board[number] = [];
        for (let x = 0; x < width; x++) {
            row.push({
                x,
                y,
                $isMine: false,
                $isOpened: false,
                $value: CELL_VALUE.NONE,
            });
        }
        board.push(row);
    }

    return board;
};

export default createBoard;
