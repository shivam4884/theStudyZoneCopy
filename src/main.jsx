// src/main.jsx
// ─────────────────────────────────────────────
// This is the ENTRY POINT of your React app.
// It finds the <div id="root"> in index.html
// and renders your entire React app inside it.
// You rarely need to touch this file.
// ─────────────────────────────────────────────

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'   // Global styles (fonts, colors, base CSS)

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode highlights potential issues during development
  // It does NOT affect the production build
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
