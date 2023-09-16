import {ICell} from '@/types/common';
import * as S from './styles';
import getCellText from '@utils/getCellText';
import useControl from '@hook/useControl';

export const Cell: React.FC<ICell> = ({x, y, status}) => {
    const {click} = useControl();

    return <S.Box onClick={() => click(x, y)}>{getCellText(status)}</S.Box>;
};

export default Cell;
