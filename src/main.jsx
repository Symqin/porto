import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.jsx';
import { ThemeProvider } from './app/providers/ThemeProvider.jsx';
import './styles/global.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element was not found in index.html.');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
