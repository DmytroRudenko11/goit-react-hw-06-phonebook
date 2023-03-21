import { createStore } from 'redux';

import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './rootReducer';
import { INITIAL_LIST } from 'initalData/initialData';

export const initialState = {
  phonebook: {
    contacts: INITIAL_LIST,
    filters: '',
  },
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, initialState, enhancer);
