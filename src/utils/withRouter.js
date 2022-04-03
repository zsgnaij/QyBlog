/**
 * 模拟withRouter
 * react-router v6 废弃withRouter以及路由组件默认不传递参数
 */
import { ReactElement } from 'react';
import { useLocation, useNavigate } from 'react-router';

export function withRouter(Component): ReactElement {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} location={location} />;
  };
}
