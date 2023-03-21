import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

import { INITIAL_LIST } from 'initalData/initialData';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { SearchField } from './SearchField/SearchField';

const getDefaultContacts = () => {
  const prevSessionData = JSON.parse(localStorage.getItem('contacts'));

  if (prevSessionData !== null) {
    return prevSessionData;
  }
  return INITIAL_LIST;
};

export function App() {
  return (
    <Wrapper>
      <AppHeader>Phonebook</AppHeader>
      <Form />
      <ListHeader>Contacts</ListHeader>
      <SearchField />
      <ContactList />
      <ToastContainer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 15px;
`;

const ListHeader = styled.h2`
  text-align: center;
`;

const AppHeader = styled.h1`
  text-align: center;
`;
