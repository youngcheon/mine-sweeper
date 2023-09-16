import {GAME_STATUS} from '@/types/common';

export default function getFaceEmoji(gameStatus: GAME_STATUS) {
    switch (gameStatus) {
        case GAME_STATUS.LOSE:
            return '😵';
        case GAME_STATUS.WIN:
            return '😎';
        default:
            return '🙂';
    }
}
