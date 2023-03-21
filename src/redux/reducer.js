import { INITIAL_LIST } from 'initalData/initialData';
import { ADD_CONTACT, ADD_FILTER, DELETE_CONTACT } from './actions';

export const contactsReducer = (
  state = {
    contacts: INITIAL_LIST,
    filters: '',
  },
  action
) => {
  switch (action.type) {
    case ADD_CONTACT: {
      return { ...state, contacts: [...state.contacts, action.payload] };
    }
    case DELETE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }
    case ADD_FILTER: {
      return { ...state, filters: action.payload };
    }

    default:
      return state;
  }
};
