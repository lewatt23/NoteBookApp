// in this file we define the constqnt we use
// in the nqvigqtion so thqt  we dont  hqve to write them

export type NavigatorRouteList<ParamList> = {
  [index in keyof ParamList]: index;
};

export type RootStackParamList = {
  HomeBottomTab: undefined;
};

export type HomeBottomTabParamList = {
  NoteBookStack: undefined;
  NotesStack: undefined;
  CreatScreen: undefined;
};

export const RootStackRouteList: NavigatorRouteList<RootStackParamList> = {
  HomeBottomTab: 'HomeBottomTab',
};

export const HomeBottomTabRouteList: NavigatorRouteList<HomeBottomTabParamList> = {
  NoteBookStack: 'NoteBookStack',
  NotesStack: 'NotesStack',
  CreatScreen: 'CreatScreen',
};
