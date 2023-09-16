import {Position} from '@/types/common';

/**
 * @NOTE : 두 좌표를 비교해서, A 로부터 맨하탄 거리 2칸 이내에 B가 있는지 검사합니다.
 */
export default function isNearby(currentPos: Position, targetPos: Position) {
    const distance = Math.abs(currentPos.x - targetPos.x) + Math.abs(currentPos.y - targetPos.y);

    return distance <= 2;
}
