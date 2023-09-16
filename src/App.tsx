import Board from '@components/Board';
import Header from '@components/Header';
import * as S from '@/styles';

function App() {
    return (
        <S.Container>
            <S.Wrapper>
                <Header />
                <Board />
            </S.Wrapper>
        </S.Container>
    );
}

export default App;
