/**
 * 路由配置
 */
import { FC, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
const route_base: string | undefined = process.env.REACT_APP_ROUTE_PREFIX;
const Resume = lazy(() => import('./containers/resume/index'));
const Home = lazy(() => import('./containers/home'));
const ConcurrentDemo = lazy(() => import('./containers/concurrentDemo'));

const routerCfg: FC = () => (
  <Routes>
    <Route path={`${route_base}/home`} element={<Home />} />
    <Route path={`${route_base}/resume`} element={<Resume />} />
    <Route path={`${route_base}/demo`} element={<ConcurrentDemo />} />
    {/* v6 废弃 <Redirect/> 标签，可用此方法替代 */}
    <Route path="*" element={<Navigate to={`${route_base}/resume`} />} />
  </Routes>
);

export default routerCfg;
