import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom"
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import ScrollToTop from './components/scrollToTop';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ScrollToTop />
                <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>
);