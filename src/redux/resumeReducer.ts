import { createAction, handleActions } from 'redux-actions';

const initialState = {
  theme: 'light',
};

const ResumeReducer = handleActions(
  {
    changeTheme: (state, { payload }) => ({
      ...state,
      payload,
    }),
  },
  initialState
);

export default ResumeReducer;
