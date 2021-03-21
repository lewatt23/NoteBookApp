import {
  AppState,
  AppActionTypes,
  ADD_NOTEBOOK,
  INoteBook,
  EDIT_NOTEBOOK,
  DELETE_NOTEBOOK,
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  INote,
  ALL_GET_NOTE_ON_NOTEBOOK,
} from './types';
import {SelectorFn} from '../../config/redux/rootReducer';

const initialState: AppState = {
  NoteBooks: [],
  Note: [],
  PNote: [],
};

export const SelectAllNoteBooks: SelectorFn<AppState['NoteBooks']> = state =>
  state.app.NoteBooks;
export const SelectAllNote: SelectorFn<AppState['Note']> = state =>
  state.app.Note;
export const SelectAllPNote: SelectorFn<AppState['PNote']> = state =>
  state.app.PNote;

const appReducer = (state = initialState, action: AppActionTypes): AppState => {
  let notebooks = state.NoteBooks;
  let note = state.Note;

  switch (action.type) {
    case ADD_NOTEBOOK:
      if (notebooks) {
        notebooks.push(action.payload);
      } else {
        notebooks = [action.payload];
      }

      return {...state, NoteBooks: [...notebooks]};
    case EDIT_NOTEBOOK:
      let editNotes: INoteBook[] = notebooks.map(item => {
        if (item.id === action.payload.id) {
          item = action.payload;
        }
        return item;
      });

      return {...state, NoteBooks: [...editNotes]};

    case DELETE_NOTEBOOK:
      let deletedNotes: INoteBook[] = notebooks.filter(
        item => item.id !== action.payload,
      );

      return {...state, NoteBooks: [...deletedNotes]};

    case ADD_NOTE:
      if (note) {
        note.push(action.payload);
      } else {
        note = [action.payload];
      }

      return {...state, Note: [...note]};

    case EDIT_NOTE:
      let editNote: INote[] = note.map(item => {
        if (item.id === action.payload.id) {
          item = action.payload;
        }
        return item;
      });

      return {...state, Note: [...editNote]};

    case DELETE_NOTE:
      let deletedNote: INote[] = note.filter(
        item => item.id !== action.payload,
      );

      return {...state, Note: [...deletedNote]};

    case ALL_GET_NOTE_ON_NOTEBOOK:
      let Pnotes: INote[] = note.filter(item => item.pid !== action.payload);

      return {...state, PNote: [...Pnotes]};
    default:
      return state;
  }
};

export default appReducer;
