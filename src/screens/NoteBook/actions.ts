import {
  ADD_NOTE,
  ADD_NOTEBOOK,
  ALL_GET_NOTE_ON_NOTEBOOK,
  AppActionTypes,
  DELETE_NOTE,
  DELETE_NOTEBOOK,
  EDIT_NOTE,
  EDIT_NOTEBOOK,
  INote,
  INoteBook,
} from './types';

export const noteBookAddAction = (payload: INoteBook): AppActionTypes => ({
  type: ADD_NOTEBOOK,
  payload: payload,
});
export const noteBookEditAction = (payload: INoteBook): AppActionTypes => ({
  type: EDIT_NOTEBOOK,
  payload: payload,
});

export const noteBookDeleteAction = (payload: number): AppActionTypes => ({
  type: DELETE_NOTEBOOK,
  payload: payload,
});

export const noteAddAction = (payload: INote): AppActionTypes => ({
  type: ADD_NOTE,
  payload: payload,
});
export const noteEditAction = (payload: INote): AppActionTypes => ({
  type: EDIT_NOTE,
  payload: payload,
});

export const noteDeleteAction = (payload: number): AppActionTypes => ({
  type: DELETE_NOTE,
  payload: payload,
});
export const noteGetAllAction = (payload: number): AppActionTypes => ({
  type: ALL_GET_NOTE_ON_NOTEBOOK,
  payload: payload,
});
