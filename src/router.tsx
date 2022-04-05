/**
 * 路由配置
 */
import { FC, lazy, ReactElement, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { route_base } from '@utils/env';
import Loading from '@src/components/Loading';
const Resume = lazy(() => import('./containers/resume/index'));
const Home = lazy(() => import('./containers/home'));
const ConcurrentDemo = lazy(() => import('./containers/concurrentDemo'));

const routerCfg: FC = (): ReactElement => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path={`${route_base}/home`} element={<Home />} />
      <Route path={`${route_base}/resume`} element={<Resume />} />
      <Route path={`${route_base}/demo`} element={<ConcurrentDemo />} />
      {/* v6 废弃 <Redirect/> 标签，可用此方法替代 */}
      <Route path="*" element={<Navigate to={`${route_base}/resume`} />} />
    </Routes>
  </Suspense>
);

export default routerCfg;
