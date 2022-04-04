import { ReactElement } from 'react';
import Router from './router';
import Layout from '@components/layout';
import 'tailwindcss/tailwind.css';

export default (): ReactElement => (
  <Layout>
    <Router />
  </Layout>
);
