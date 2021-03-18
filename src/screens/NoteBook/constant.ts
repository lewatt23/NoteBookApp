import {NavigatorRouteList} from '../../navigation/constant.navigation';

export type NoteBookStackParamList = {
  NoteBook: undefined;
  NoteBookDetails: undefined;
  NoteBookSingle: undefined;
  NoteBookAdd: undefined;
  NoteAdd: undefined;
};

export const NoteBookStackRouteList: NavigatorRouteList<NoteBookStackParamList> = {
  NoteBook: 'NoteBook',
  NoteBookDetails: 'NoteBookDetails',
  NoteBookSingle: 'NoteBookSingle',
  NoteBookAdd: 'NoteBookAdd',
  NoteAdd: 'NoteAdd',
};
