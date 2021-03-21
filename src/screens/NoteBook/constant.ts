import {NavigatorRouteList} from '../../navigation/constant.navigation';
import {INoteBook} from './types';

export type NoteBookStackParamList = {
  NoteBook: undefined;
  NoteBookDetails: undefined;
  NoteBookSingle: {
    item: INoteBook;
  };
  NoteBookAdd: {
    item?: INoteBook;

    type?: 'new' | 'edit';
  };
  NoteAdd: {
    item?: INoteBook;

    type?: 'new' | 'edit';
  };
};

export const NoteBookStackRouteList: NavigatorRouteList<NoteBookStackParamList> = {
  NoteBook: 'NoteBook',
  NoteBookDetails: 'NoteBookDetails',
  NoteBookSingle: 'NoteBookSingle',
  NoteBookAdd: 'NoteBookAdd',
  NoteAdd: 'NoteAdd',
};
