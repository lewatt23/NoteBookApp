import {AppState, APP_SAVED_LATEST, AppActionTypes} from './types';
import {SelectorFn} from '../../config/redux/rootReducer';

const initialState: AppState = {
  saved: undefined,
};

export const SelectSavedArticle: SelectorFn<AppState['saved']> = state => state;

const appReducer = (state = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case APP_SAVED_LATEST:
      return {...state, saved: action.payload};

    default:
      return state;
  }
};

export default appReducer;
