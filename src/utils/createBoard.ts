import {ICell} from '@/types/common';

interface CreateBoardProps {
    width: number;
    height: number;
}

/**
 * @NOTE : 초기 게임판을 만드는 함수. 지금 지뢰를 만들지 않고 클릭시에 만들도록 한다.
 */
const createBoard = ({width, height}: CreateBoardProps) => {
    const board: ICell[][] = [];

    for (let y = 0; y < height; y++) {
        const row: ICell[] = [];
        for (let x = 0; x < width; x++) {
            row.push({
                x,
                y,
                isOpened: false,
                isMine: false,
            });
        }
        board.push(row);
    }

    return board;
};

export default createBoard;
