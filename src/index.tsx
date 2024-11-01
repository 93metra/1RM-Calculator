// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import { TrainingProvider } from './context/trainingContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <TrainingProvider>
      <App />
    </TrainingProvider>
  </React.StrictMode>
);
