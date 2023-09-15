export interface ControlProps {
    board: ICell[][];
    width: number;
    height: number;
    mineCount: number;
    status: GAME_STATUS;
    timer: number;
}

export interface Position {
    x: number;
    y: number;
}

export interface ICell extends Position {
    isOpened: boolean;
    isMine: boolean;
    status?: CELL_STATUS;
}

export enum GAME_STATUS {
    READY = 'READY',
    PLAYING = 'PLAYING',
    WIN = 'WIN',
    LOSE = 'LOSE',
}

export enum CELL_STATUS {
    MINE = 'MINE',
    FLAG = 'FLAG',
    UNKNOWN = 'UNKNOWN',
    WARN = 'WARN',
    NONE = 'NONE',
}
