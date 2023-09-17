import {configureStore} from '@reduxjs/toolkit';
import {gameSlice} from './modules/game';
import {modalSlice} from './modules/modal';

const store = configureStore({
    reducer: {game: gameSlice.reducer, modal: modalSlice.reducer},
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({serializableCheck: false});
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
