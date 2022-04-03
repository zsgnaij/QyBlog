import { ReactChildren, ReactElement, ReactNode } from 'react';
import TopScroll from '../topScroll';

interface Props {
  children: ReactChildren | ReactNode;
}

export default ({ children }: Props): ReactElement => (
  <div className="basic-layout">
    <TopScroll />
    {children}
  </div>
);
