import {CELL_VALUE} from '@/types/common';

export default function getCellText(status: CELL_VALUE | number) {
    switch (status) {
        case CELL_VALUE.NONE:
            return '';
        case CELL_VALUE.CLICKED_MINE:
            return '💣';
        case CELL_VALUE.UNKNOWN:
            return '?';
        case CELL_VALUE.FLAG:
            return '🚩';
        case 0:
            return '';
        default:
            return status;
    }
}
