import { ReactChildren, ReactElement } from 'react';
import TopScroll from '../TopScroll';
import { useSelector } from 'react-redux';
import { ThemeState } from '@redux/themeReducer';
import './index.less';

interface IProps {
  children: ReactChildren | ReactElement;
}

export default ({ children }: IProps): ReactElement => {
  const { theme }: { theme: string } = useSelector<
    ThemeState,
    { theme: string }
  >(state => {
    return state;
  });

  return (
    <div className={`${theme}-theme basic-layout`}>
      <TopScroll />
      {children}
    </div>
  );
};
