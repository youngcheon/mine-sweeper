import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from './styles/GlobalStyle.ts';
import {Provider} from 'react-redux';
import store from './store/index.ts';
import Modal from '@components/Modal/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle />
            <Modal />
            <App />
        </Provider>
    </React.StrictMode>,
);
