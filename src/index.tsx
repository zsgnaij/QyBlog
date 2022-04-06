import { StrictMode } from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { printVersion } from '@utils/version';
import { Provider } from 'react-redux';
import configureStore from './utils/store';
import App from './App';

const store = configureStore();

const rootNode = document.getElementById('root');
const rootElement = (
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

// ReactDOM.render(rootElement, rootNode);
ReactDOM.createRoot(rootNode).render(rootElement);

// reportWebVitals(console.log);

printVersion();
