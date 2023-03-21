import { combineReducers } from 'redux';

import { contactsReducer } from './reducer';

export const rootReducer = combineReducers({
  phonebook: contactsReducer,
});
