import { ReactElement } from 'react';
import Router from './router';
import Layout from '@src/components/Layout';
import 'tailwindcss/tailwind.css';
import '@assets/iconfonts/iconfont.css';
import '@assets/iconfonts/iconfont.js';
import './theme.less';
import './index.css';

export default (): ReactElement => (
  <Layout>
    <Router />
  </Layout>
);
