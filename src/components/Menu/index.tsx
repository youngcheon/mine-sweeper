import {useState} from 'react';
import * as S from './styles';
import useControl from '@hook/useControl';

const Menu = () => {
    const [isShowDropDown, setDropDown] = useState<boolean>(false);
    const {start} = useControl();

    const startBeginner = () => {
        start(8, 8, 10);
        setDropDown(false);
    };
    const startIntermediate = () => {
        start(16, 16, 40);
        setDropDown(false);
    };
    const startExpert = () => {
        start(32, 16, 100);
        setDropDown(false);
    };

    return (
        <S.Container>
            <span onClick={() => setDropDown((prev) => !prev)}>MENU</span>
            {isShowDropDown && (
                <S.Dropdown>
                    <p onClick={startBeginner}>* Beginner</p>
                    <p onClick={startIntermediate}>* Intermediate</p>
                    <p onClick={startExpert}>* Expert</p>
                </S.Dropdown>
            )}
        </S.Container>
    );
};

export default Menu;
