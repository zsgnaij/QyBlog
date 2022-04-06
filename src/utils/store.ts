import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
  Store,
  StoreEnhancer,
} from 'redux';
import thunk from 'redux-thunk';

export interface IStore extends Store {
  injectReducer: (key: string, reducer: () => any) => void;
  injectedReducers: any;
}

export interface IWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: (
    enhancer: StoreEnhancer
  ) => StoreEnhancer;
}

/**
 *
 * @param initialState 初始状态
 * @param initialReducers 初始reducer对象，以{key:reducer}的形式定义
 */
function configureStore(
  initialState: any = {},
  initialReducers: any = state => state
): IStore {
  const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: devCompose }: IWindow = window;
  const composeEnhancers = devCompose || compose;
  const store = <IStore>(
    createStore(
      initialReducers,
      initialState,
      composeEnhancers(applyMiddleware(thunk))
    )
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

export default configureStore();
