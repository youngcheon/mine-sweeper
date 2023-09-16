import FaceButton from '@/components/FaceButton';
import * as S from './styles';
import Counter from '@components/Counter';

export default function Header() {
    return (
        <S.Container>
            <Counter />
            <FaceButton />
            <Counter />
        </S.Container>
    );
}
