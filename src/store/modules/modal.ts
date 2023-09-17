import {createSlice} from '@reduxjs/toolkit';
import {ModalState} from '@/types/common';

const initialState: ModalState = {
    isOpen: false,
    title: '',
    content: '',
};

// 모달을 전역으로 관리하기 위한 slice 입니다.
export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        },
    },
});

export const {open, close} = modalSlice.actions;
