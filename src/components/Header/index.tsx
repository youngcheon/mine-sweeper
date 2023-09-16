import FaceButton from '@/components/FaceButton';
import * as S from './styles';
import Counter from '@components/Counter';
import useControl from '@hook/useControl';
import useInterval from '@hook/useTimer';
import {GAME_STATUS} from '@/types/common';

export default function Header() {
    const {gameState, increaseTimer} = useControl();
    const isPlaying = gameState.status === GAME_STATUS.PLAYING;

    useInterval(increaseTimer, isPlaying ? 1000 : null);

    return (
        <S.Container>
            <Counter count={isPlaying ? gameState.flagCount : 0} />
            <FaceButton />
            <Counter count={gameState.timer} />
        </S.Container>
    );
}
