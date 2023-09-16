import useControl from '@hook/useControl';
import * as S from './styles';
import getFaceEmoji from '@utils/getFaceEmoji';

const FaceButton = () => {
    const {gameState, start} = useControl();

    const restart = () => {
        start(gameState.width, gameState.height, gameState.mineCount);
    };

    return (
        <S.Container onClick={restart}>
            <S.Icon>{getFaceEmoji(gameState.status)}</S.Icon>
        </S.Container>
    );
};

export default FaceButton;
