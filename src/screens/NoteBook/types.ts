import {TagEnum} from './component/card';
export const APP_SAVED_LATEST = ' APP_SAVED_LATEST';
//Notebook
export const ADD_NOTEBOOK = 'ADD_NOTEBOOK';
export const EDIT_NOTEBOOK = 'EDIT_NOTEBOOK';
export const DELETE_NOTEBOOK = 'DELETE_NOTEBOOK';
export const GET_NOTEBOOK = 'GET_NOTEBOOK';
export const ALL_GET_NOTEBOOK = 'ALL_GET_NOTEBOOK';
//NotePage
export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const GET_NOTE = 'GET_NOTE';
export const ALL_GET_NOTE_ON_NOTEBOOK = 'ALL_GET_NOTE_ON_NOTEBOOK';

export interface INoteBook {
  id: number;
  title: string;
  description: string;
  tag: TagEnum | string;
}

export interface INote {
  id: number;
  pid: number;
  title: string;
  description: string;
  tag: TagEnum | string;
  createdAt: string;
}
export interface NoteBookAddAction {
  type: typeof ADD_NOTEBOOK;
  payload: INoteBook;
}

export interface NoteBookGetAction {
  type: typeof GET_NOTEBOOK;
  payload: number;
}

export interface NoteBookdDeleteAction {
  type: typeof DELETE_NOTEBOOK;
  payload: number;
}

export interface NoteBookdEditeAction {
  type: typeof EDIT_NOTEBOOK;
  payload: INoteBook;
}
export interface NoteBookGetAllAction {
  type: typeof ALL_GET_NOTEBOOK;
}

export interface NoteGetAllAction {
  type: typeof ALL_GET_NOTE_ON_NOTEBOOK;
  payload: number;
}

export interface NoteAddAction {
  type: typeof ADD_NOTE;
  payload: INote;
}

export interface NoteGetAction {
  type: typeof GET_NOTE;
}

export interface NoteDeleteAction {
  type: typeof DELETE_NOTE;
  payload: number;
}

export interface NoteEditeAction {
  type: typeof EDIT_NOTE;
  payload: INote;
}

export interface AppState {
  NoteBooks: INoteBook[];
  Note: INote[];
  PNote: INote[];
}

export type AppActionTypes =
  | NoteBookAddAction
  | NoteBookGetAction
  | NoteBookGetAllAction
  | NoteBookdDeleteAction
  | NoteBookdEditeAction
  | NoteAddAction
  | NoteEditeAction
  | NoteGetAllAction
  | NoteDeleteAction
  | NoteGetAction;
