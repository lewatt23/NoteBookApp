import {PING, PONG} from './types';
import {filter, mapTo} from 'rxjs/operators';

export const pingEpic = (action$: any) =>
  action$.pipe(
    filter((action: any) => action.type === PING),
    mapTo({type: PONG}),
  );
