import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { printVersion } from '@utils/version';
import './index.css';

const rootNode = document.getElementById('root');
const rootElement = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// ReactDOM.render(rootElement, rootNode);

ReactDOM.createRoot(rootNode).render(rootElement);

// reportWebVitals(console.log);

printVersion();
