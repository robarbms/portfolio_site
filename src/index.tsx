import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './components/App'

const root = document.getElementById('root');

if(root) {
  const rootTarget = createRoot(root);
  rootTarget.render(
      <App />
  );
}
