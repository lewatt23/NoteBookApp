import {Action} from 'redux';
import {
  combineEpics,
  createEpicMiddleware,
  Epic,
  StateObservable,
} from 'redux-observable';
import {pingEpic} from '../state/epics';

import {RootActionTypes, RootState} from './rootReducer';

// used for selecting state
export type SelectFn$ = <V>(
  state$: StateObservable<RootState>,
  selectionFn$: (state: RootState) => V,
) => V;

export type EnhancedEpics<
  Input extends Action = RootActionTypes,
  Output extends Input = Input,
  State = RootState
> = Epic<Input, Output, State, {Select$: SelectFn$}>;

const Select$: SelectFn$ = (state$, selectorFn) => selectorFn(state$.value);

export const rootEpic = combineEpics(pingEpic);

// setup Epic Middleware
export const epicMiddleware = createEpicMiddleware<
  RootActionTypes,
  RootActionTypes,
  RootState
>({dependencies: {Select$}});
