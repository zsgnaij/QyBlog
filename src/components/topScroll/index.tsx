/**
 * Top scroll
 */
import React, { useEffect, useState } from 'react';
import './index.less';

export default () => {
  const [percent, setPercent] = useState<number>(0);

  const changePercent = () => {
    // 整个页面高度
    const vH: number =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    // 窗口可视高度
    const cH: number =
      document.documentElement.clientHeight || document.body.clientHeight;
    // 可滚动的高度
    const sH: number = vH - cH;
    const sT: number =
      document.documentElement.scrollTop || document.body.scrollTop;
    const percentVal = Math.round((sT * 100) / sH);
    setPercent(percentVal);
  };
  useEffect(() => {
    window.addEventListener('scroll', changePercent);
    return () => {
      window.removeEventListener('scroll', changePercent);
    };
  }, []);
  return <div className="top-scroll" style={{ width: `${percent}%` }} />;
};
