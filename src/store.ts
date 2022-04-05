import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import ThemeRedux from './redux/themeReducer';

const store = createStore(ThemeRedux);
export default store;
