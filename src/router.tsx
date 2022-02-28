/**
 * @flow
 * 路由配置
 */
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './containers/home';

const routerCfg: FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home></Home>}></Route>
      {/* v6 废弃 <Redirect/> 标签，可用此方法替代 */}
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default routerCfg;
