import {ControlProps} from '@/types/common';

/**
 * @NOTE : 적절한 게임 세팅인지 검사합니다.
 *  가로 세로 8~50
 *  지뢰 갯수 최소 1개 ~ 전체 셀 갯수의 1/3
 */
export default function validateSetting(props: Pick<ControlProps, 'height' | 'width' | 'mineCount'>) {
    const {width, height, mineCount} = props;

    if ([width, height, mineCount].some((value) => typeof value !== 'number')) {
        return false;
    }

    if ([width, height].some((value) => value < 8 || value > 50)) {
        return false;
    }

    if (mineCount < 1 || mineCount > width * height * (1 / 3)) {
        return false;
    }

    return true;
}
