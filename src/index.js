import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App/App';
import { BrowserRouter } from 'react-router-dom'; // это маршрутизатор для обработки js страниц
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './Redux/store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Zoom } from 'react-toastify';
import { GlobalStyle } from './GlobalStyled.styled';
import { ThemeProvider } from '@mui/material/styles';
import { materialTheme } from './Helpers/materialTheme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
          <ThemeProvider theme={materialTheme}>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Zoom}
            />
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
