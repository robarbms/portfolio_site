import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './components/App'

// div element with the root id
const root:HTMLElement | null = document.getElementById('root');

// Attach the App component to the #root element
if (root !== null) {
  const rootTarget = createRoot(root);
  rootTarget.render(
      <App />
  );
}
