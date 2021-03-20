export const APP_SAVED_LATEST = ' APP_SAVED_LATEST';

export interface AppSavedLatestAction {
  type: typeof APP_SAVED_LATEST;
  payload: string;
}

export type AppActionTypes = AppSavedLatestAction | {type: 'hdhs'};

export interface AppState {
  saved: any | undefined;
}
