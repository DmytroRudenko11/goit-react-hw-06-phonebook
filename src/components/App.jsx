import { useEffect, useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Form } from './Form/Form';
import { SearchField } from './SearchField/SearchField';
import { INITIAL_LIST } from 'initalData/initialData';
import styled from 'styled-components';

const getDefaultContacts = () => {
  const prevSessionData = JSON.parse(localStorage.getItem('contacts'));

  if (prevSessionData !== null) {
    return prevSessionData;
  }
  return INITIAL_LIST;
};

export function App() {
  const [contacts, setContacts] = useState(getDefaultContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleMatch = name => {
    const arrayOfNames = contacts.map(({ name }) => name);
    return arrayOfNames.includes(name);
  };

  const handleSubmit = name => {
    setContacts([...contacts, name]);
  };

  const handleSearchField = name => {
    setFilter(name);
  };

  const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const applyFilter = () => {
    return contacts.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Wrapper>
      <AppHeader>Phonebook</AppHeader>
      <Form onSubmit={handleSubmit} onMatch={handleMatch} contacts={contacts} />
      <ListHeader>Contacts</ListHeader>
      <SearchField onSearch={handleSearchField} />
      <ContactList
        onSearch={handleSearchField}
        data={applyFilter()}
        onDelete={handleDelete}
      />
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
