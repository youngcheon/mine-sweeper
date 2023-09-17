import useControl from '@hook/useControl';
import * as S from './styles';
import {ControlProps} from '@/types/common';
import {RootState} from '@store/index';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {close} from '@store/modules/modal';

/**
 * @NOTE : 커스텀 게임을 위한 모달입니다.
 */
const Modal = () => {
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);
    const dispatch = useDispatch();
    const {start} = useControl();
    const [customSetting, setCustomSetting] = useState<Pick<ControlProps, 'height' | 'width' | 'mineCount'>>({
        height: 8,
        width: 8,
        mineCount: 10,
    });

    if (!isOpen) return null;

    return (
        <S.Background>
            <S.Container>
                <S.Title>* CUSTOM GAME SETUP *</S.Title>
                <S.ModalContent>
                    <div>
                        Height:{' '}
                        <input
                            type="number"
                            defaultValue={8}
                            onChange={({target: {value}}) => setCustomSetting((prev) => ({...prev, height: parseInt(value)}))}
                        />
                    </div>
                    <div>
                        Width:{' '}
                        <input
                            type="number"
                            defaultValue={8}
                            onChange={({target: {value}}) => setCustomSetting((prev) => ({...prev, width: parseInt(value)}))}
                        />
                    </div>
                    <div>
                        Number of Mines:{' '}
                        <input
                            type="number"
                            defaultValue={10}
                            onChange={({target: {value}}) =>
                                setCustomSetting((prev) => ({...prev, mineCount: parseInt(value)}))
                            }
                        />
                    </div>
                </S.ModalContent>
                <S.ConfirmButton
                    onClick={() => {
                        start(customSetting.width, customSetting.height, customSetting.mineCount);
                        dispatch(close());
                    }}
                >
                    START
                </S.ConfirmButton>
            </S.Container>
        </S.Background>
    );
};

export default Modal;
