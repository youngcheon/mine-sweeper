import {CELL_STATUS} from '@/types/common';

export default function getCellText(status: CELL_STATUS | number) {
    switch (status) {
        case CELL_STATUS.NONE:
            return '';
        case CELL_STATUS.MINE:
            return '💣';
        case CELL_STATUS.UNKNOWN:
            return '?';
        case CELL_STATUS.FLAG:
            return '🚩';
        case 0:
            return '';
        default:
            return status;
    }
}