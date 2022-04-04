/**
 * suspense loading
 */
import { ReactElement } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './index.less';

const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

export default (): ReactElement => (
  <Spin className="loading-fallback-spin" spinning indicator={antIcon}>
    <div className="loading-page" />
  </Spin>
);
