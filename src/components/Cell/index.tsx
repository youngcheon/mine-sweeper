import {ICell} from '@/types/common';
import * as S from './styles';
import getCellText from '@utils/getCellText';
import useControl from '@hook/useControl';

export const Cell: React.FC<ICell> = ({x, y, status, ...props}) => {
    const {click, rightClick} = useControl();

    return (
        <S.Box
            {...props}
            onClick={() => {
                click(x, y);
            }}
            onContextMenu={(e) => {
                e.preventDefault();
                rightClick(x, y);
            }}
        >
            {getCellText(status)}
        </S.Box>
    );
};

export default Cell;
