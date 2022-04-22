import { PureComponent, ReactNode } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import store from '@utils/store';

interface IProps {
  store: any;
}

// const injectReducer: any =
//   ({ key, reducer }) =>
//   WrappedComponent => {
//     class ReducerInjector extends PureComponent<IProps> {
//       constructor(props) {
//         super(props);
//         store.injectReducer(key, reducer);
//       }

//       static WrappedComponent = WrappedComponent;

//       // 定义在开发者工具中的组件名称
//       static displayName = `withReducer(${
//         WrappedComponent.displayName || WrappedComponent.name || 'Component'
//       })`;

//       render(): ReactNode {
//         return <WrappedComponent {...this.props} />;
//       }
//     }

//     // 拷贝源组件的静态属性
//     return hoistNonReactStatics(ReducerInjector, WrappedComponent);
//   };

const injectReducer: any = ({ key, reducer }) => {
  store.injectReducer(key, reducer);
};

export default injectReducer;
