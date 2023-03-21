import { nanoid } from 'nanoid';

export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const ADD_FILTER = 'ADD_FILTER';

export const addContact = (name, number) => {
  return { type: ADD_CONTACT, payload: { id: nanoid(), name, number } };
};

export const deleteContact = id => {
  return { type: DELETE_CONTACT, payload: id };
};
export const addFilter = name => {
  return { type: ADD_FILTER, payload: name };
};
