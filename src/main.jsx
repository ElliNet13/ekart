import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { HUD } from './HUD';
import { Landing } from './Landing';
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Analytics>
      <App />
      <HUD />
      <Landing />
    </Analytics>
  </React.StrictMode>
);
