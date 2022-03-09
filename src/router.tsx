/**
 * @flow
 * 路由配置
 */
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import Home from './containers/home';
import Resume from './containers/resume';

const routerCfg: FC = () => {
  return (
    <Routes>
      {/* <Route path="/home" element={<Home></Home>}></Route> */}
      <Route path="/resume" element={<Resume></Resume>}></Route>
      {/* v6 废弃 <Redirect/> 标签，可用此方法替代 */}
      <Route path="*" element={<Navigate to="/resume" />} />
    </Routes>
  );
};

export default routerCfg;
