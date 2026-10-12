import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Element with id 'root' not found");
}
// I learnt this from AI, didn't completely understand what that was tho.

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
