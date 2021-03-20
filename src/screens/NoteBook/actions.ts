import {AppActionTypes, APP_SAVED_LATEST} from './types';

export const appSavedLatestAction = (payload: string): AppActionTypes => ({
  type: APP_SAVED_LATEST,
  payload: payload,
});
