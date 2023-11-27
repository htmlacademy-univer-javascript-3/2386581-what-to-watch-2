import { store } from '../store';
import { setError } from '../store/actions';

const TIMEOUT_SHOW_ERROR = 3000;

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  setTimeout(()=> store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
};
