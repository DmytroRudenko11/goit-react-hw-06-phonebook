import { createReducer } from '@reduxjs/toolkit';

import { INITIAL_LIST } from 'initalData/initialData';
import { addContact, deleteContact, addFilter } from './actions';

const initialState = {
  contacts: INITIAL_LIST,
  filters: '',
};

export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    return { ...state, contacts: [...state.contacts, action.payload] };
  },
  [deleteContact]: (state, action) => {
    return {
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
    };
  },
  [addFilter]: (state, action) => {
    return { ...state, filters: action.payload };
  },
});
