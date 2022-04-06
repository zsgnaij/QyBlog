import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

export interface IStore extends Store {
  injectReducer: (key: string, reducer: () => any) => void;
  injectedReducers: any;
}

/**
 *
 * @param initialState 初始状态
 * @param initialReducers 初始reducer对象，以{key:reducer}的形式定义
 */
export default function configureStore(
  initialState: any = {},
  initialReducers: any = state => state
): IStore {
  const store = <IStore>(
    createStore(initialReducers, initialState, applyMiddleware(thunk))
  );
  store.injectedReducers = {
    ...initialReducers,
  };
  store.injectReducer = (key, reducer) => {
    store.injectedReducers[key] = reducer;
    store.replaceReducer(combineReducers(store.injectedReducers));
  };

  return store;
}
