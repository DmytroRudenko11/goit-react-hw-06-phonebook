export const applyFilter = state => {
  const { contacts, filters } = state.phonebook;
  if (filters !== '') {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
  return contacts;
};
