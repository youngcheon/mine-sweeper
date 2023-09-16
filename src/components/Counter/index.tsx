import * as S from './styles';

interface CounterProps {
    count: number;
}

const Counter: React.FC<CounterProps> = ({count}) => {
    return (
        <S.Container>
            <S.Number>{count.toString().padStart(3, '0')}</S.Number>
        </S.Container>
    );
};

export default Counter;
