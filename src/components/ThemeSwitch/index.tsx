/**
 * 主题切换
 */
import { ReactElement } from 'react';
import { Switch, SwitchProps } from 'antd';

export default (props: SwitchProps): ReactElement => (
  <Switch
    {...props}
    checkedChildren={<i className="iconfont icon-lightMode" />}
    unCheckedChildren={<i className="iconfont icon-darkMode" />}
  />
);
