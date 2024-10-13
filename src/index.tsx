import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AppRoot from './app';
import { store } from './app/store'
import { Provider } from 'react-redux'

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = createRoot(rootElement as HTMLDivElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AppRoot />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
  );
}
else {
  console.error('Root element not found');
}


reportWebVitals(console.log);
