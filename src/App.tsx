import Board from '@components/Board';
import Header from '@components/Header';
import * as S from '@/styles';
import Menu from '@components/Menu';
import './App.css';

function App() {
    return (
        <S.Container>
            <Menu />
            <S.Wrapper>
                <Header />
                <Board />
            </S.Wrapper>
        </S.Container>
    );
}

export default App;
