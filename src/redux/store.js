import { createStore } from 'redux';
import { INITIAL_LIST } from 'initalData/initialData';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  contacts: INITIAL_LIST,
  filters: '',
};

const rootReducer = (state = initialState, action) => {
  return state;
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
