import { ReactChildren, ReactElement } from 'react';
import TopScroll from '../TopScroll';
import { useSelector } from 'react-redux';
import { ThemeState } from '@redux/themeReducer';
import './index.less';

interface IProps {
  children: ReactChildren | ReactElement;
}

interface IStore {
  themeReducer: ThemeState;
}

export default ({ children }: IProps): ReactElement => {
  const { theme }: { theme: string } = useSelector<IStore, { theme: string }>(
    ({ themeReducer }) => ({ ...themeReducer })
  );

  return (
    <div className={`${theme || 'light'}-theme basic-layout`}>
      <TopScroll />
      {children}
    </div>
  );
};
