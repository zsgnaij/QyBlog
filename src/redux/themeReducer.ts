import { createAction } from 'redux-actions';
import { produce } from 'immer';

interface state {
  theme: string;
}

interface action {
  type: string;
  payload: string | any;
}

export default function (state: state = { theme: 'light' }, action: action) {
  switch (action.type) {
    case 'THEME':
      return produce(state, (draft: state) => {
        draft.theme = action.payload;
      });
    default:
      return state;
  }
}

export function switchTheme(theme: string) {
  return createAction('THEME')(theme);
}
