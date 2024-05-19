import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from "./store/store";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
              <ThemeProvider>
                <App />
              </ThemeProvider>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
