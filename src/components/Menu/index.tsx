import * as S from './styles';
import useControl from '@hook/useControl';
import useBoolean from '@hook/useBoolean';
import {useDispatch} from 'react-redux';
import * as modal from '@store/modules/modal';

const Menu = () => {
    const [isShowMenu, menuToggle, , closeMenu] = useBoolean(false);
    const dispatch = useDispatch();
    const {start} = useControl();

    const startBeginner = () => {
        start(8, 8, 10);
        closeMenu();
    };

    const startIntermediate = () => {
        start(16, 16, 40);
        closeMenu();
    };

    const startExpert = () => {
        start(32, 16, 100);
        closeMenu();
    };

    const startCustomGame = () => {
        closeMenu();
        dispatch(modal.open());
    };

    return (
        <S.Container>
            <span onClick={menuToggle}>MENU</span>
            {isShowMenu && (
                <S.Dropdown>
                    <p onClick={startBeginner}>* Beginner</p>
                    <p onClick={startIntermediate}>* Intermediate</p>
                    <p onClick={startExpert}>* Expert</p>
                    <p onClick={startCustomGame}>* Custom</p>
                </S.Dropdown>
            )}
        </S.Container>
    );
};

export default Menu;
