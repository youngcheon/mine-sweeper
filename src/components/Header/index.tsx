import FaceButton from '@/components/FaceButton';
import * as S from './styles';
import Counter from '@components/Counter';
import useControl from '@hook/useControl';

export default function Header() {
    const {gameState} = useControl();
    return (
        <S.Container>
            <Counter count={gameState.flagCount} />
            <FaceButton />
            <Counter count={gameState.timer} />
        </S.Container>
    );
}
