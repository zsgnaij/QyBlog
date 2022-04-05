import { ReactChildren, ReactElement } from 'react';
import TopScroll from '../TopScroll';
import { useSelector } from 'react-redux';
import './index.less';

interface Props {
  children: ReactChildren | ReactElement;
}

export default ({ children }: Props): ReactElement => {
  const { theme } = useSelector(state => {
    return state;
  });

  return (
    <div className={`${theme}-theme basic-layout`}>
      <TopScroll />
      {children}
    </div>
  );
};
