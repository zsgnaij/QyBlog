import { PureComponent, ReactNode } from 'react';
import { ReactReduxContext, ReactReduxContextValue } from 'react-redux';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { IStore } from '@utils/store';

interface IProps {
  store: any;
}

interface IReactReduxContextValue extends ReactReduxContextValue {
  store: IStore;
}

const injectReducer: any =
  ({ key, reducer }) =>
  WrappedComponent => {
    class ReducerInjector extends PureComponent<IProps> {
      constructor(props) {
        super(props);
        <ReactReduxContext.Consumer>
          {({ store }: IReactReduxContextValue) => {
            store.injectReducer(key, reducer);
            return null;
          }}
        </ReactReduxContext.Consumer>;
      }

      static WrappedComponent = WrappedComponent;

      // 定义在开发者工具中的组件名称
      static displayName = `withReducer(${
        WrappedComponent.displayName || WrappedComponent.name || 'Component'
      })`;

      render(): ReactNode {
        return <WrappedComponent {...this.props} />;
      }
    }

    // 拷贝源组件的静态属性
    return hoistNonReactStatics(ReducerInjector, WrappedComponent);
  };

export default injectReducer;
