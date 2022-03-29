import { ReactElement } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const injectReducer = ({ key, reducer }: any) => {
  console.log(key);
  return (warpedComponent: any) => {
    const store = createStore(reducer);
    return <Provider store={store}>{warpedComponent}</Provider>;
  };
};

export default injectReducer;
