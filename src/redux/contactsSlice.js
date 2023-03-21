import { createSlice, nanoid } from '@reduxjs/toolkit';
import { INITIAL_LIST } from 'initalData/initialData';

const CONTACTS_SLICE = '@@contacts';

const contactsInitialState = {
  contacts: INITIAL_LIST,
  filters: '',
};

export const contactsSlice = createSlice({
  name: CONTACTS_SLICE,
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return { ...state, contacts: [...state.contacts, action.payload] };
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
    addFilter(state, action) {
      return { ...state, filters: action.payload };
    },
  },
});

export const contactsReduser = contactsSlice.reducer;
export const { addContact, deleteContact, addFilter } = contactsSlice.actions;
