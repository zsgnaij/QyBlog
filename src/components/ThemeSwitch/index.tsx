/**
 * 主题切换
 */
import { Switch } from 'antd';

interface Props {
  onChange: (checked: boolean) => void;
}

export default (props: Props) => (
  <Switch
    {...props}
    checkedChildren={<i className="iconfont icon-lightMode" />}
    unCheckedChildren={<i className="iconfont icon-darkMode" />}
  />
);
