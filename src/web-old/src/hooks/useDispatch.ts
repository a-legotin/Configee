import { Dispatch } from 'react';
import store from 'stores';

export const useAppDispatch = () => store.dispatch as typeof store.dispatch | Dispatch<any>;
