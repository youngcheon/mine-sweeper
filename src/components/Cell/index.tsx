import {ICell} from '@/types/common';
import * as S from './styles';
import getCellText from '@utils/getCellText';
import useControl from '@hook/useControl';
import {MouseEvent} from 'react';

export const Cell: React.FC<ICell> = ({x, y, status, ...props}) => {
    const {click, rightClick} = useControl();

    const handleLeftClick = () => click(x, y);
    const handleRightClick = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        rightClick(x, y);
    };

    return (
        <S.Box {...props} onClick={handleLeftClick} onContextMenu={handleRightClick} status={status}>
            {getCellText(status)}
        </S.Box>
    );
};

export default Cell;
