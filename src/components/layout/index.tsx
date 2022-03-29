/**
 * @flow
 *
 */
import { ReactChildren, ReactNode } from 'react';
import TopScroll from '../topScroll';

interface Props {
  children: ReactChildren | ReactNode;
}

export default ({ children }: Props) => (
  <div className="basic-layout">
    <TopScroll />
    {children}
  </div>
);
