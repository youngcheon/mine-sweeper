import {ReactElement} from 'react';

export interface ControlProps {
    board: Board;
    width: number;
    height: number;
    mineCount: number;
    status: GAME_STATUS;
    timer: number;
    openCount: number;
    flagCount: number;
}

export type Board = ICell[][];

export interface Position {
    x: number;
    y: number;
}

export interface ICell extends Position {
    $isOpened: boolean;
    $isMine: boolean;
    $value: CELL_VALUE | number;
}

export enum GAME_STATUS {
    READY = 'READY',
    PLAYING = 'PLAYING',
    WIN = 'WIN',
    LOSE = 'LOSE',
}

export enum CELL_VALUE {
    CLICKED_MINE = 'CLICKED_MINE', // 터진 지뢰
    FLAG = 'FLAG', // 깃발
    UNKNOWN = 'UNKNOWN', // 물음표
    NONE = 'NONE', //열지않음
}

export interface ModalState {
    isOpen: boolean;
    title: string;
    content?: ReactElement | string;
}
