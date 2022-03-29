/**
 * 路由配置
 */
import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Resume from './containers/resume/index';
import Home from './containers/home';

const route_base: string | undefined = process.env.REACT_APP_ROUTE_PREFIX;

const routerCfg: FC = () => (
  <Routes>
    <Route path={`${route_base}/home`} element={<Home />} />
    <Route path={`${route_base}/resume`} element={<Resume />} />
    {/* v6 废弃 <Redirect/> 标签，可用此方法替代 */}
    <Route path="*" element={<Navigate to={`${route_base}/resume`} />} />
  </Routes>
);

export default routerCfg;
