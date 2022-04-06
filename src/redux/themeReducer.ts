import { createAction } from 'redux-actions';
import { produce } from 'immer';

export interface ThemeState {
  theme: string;
}

interface ThemeAction {
  type: string;
  payload: string | any;
}

export default function (
  state: ThemeState = { theme: 'light' },
  action: ThemeAction
) {
  switch (action.type) {
    case 'THEME':
      return produce(state, (draft: ThemeState) => {
        draft.theme = action.payload;
      });
    default:
      return state;
  }
}

export function switchTheme(theme: string) {
  return createAction('THEME')(theme);
}
