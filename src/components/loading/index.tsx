/**
 * suspense loading
 */
import { ReactElement } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

export default (): ReactElement => (
  <Backdrop open sx={{ color: '#fff' }}>
    <CircularProgress color="inherit" />
  </Backdrop>
);
