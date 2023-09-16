import useControl from '@hook/useControl';
import * as S from './styles';

const FaceButton = () => {
    const {gameState, start} = useControl();

    const restart = () => {
        start(gameState.width, gameState.height, gameState.mineCount);
    };

    return (
        <S.Container onClick={restart}>
            <S.Icon>🙂</S.Icon>
        </S.Container>
    );
};

export default FaceButton;
