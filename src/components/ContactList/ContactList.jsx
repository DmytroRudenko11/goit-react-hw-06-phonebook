import { Item } from 'components/Item/Item';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { applyFilter } from 'redux/selector';

export function ContactList() {
  const filteredContacts = useSelector(state => applyFilter(state));

  return (
    <List>
      {filteredContacts.length !== 0 ? (
        filteredContacts.map(contact => (
          <Item
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        ))
      ) : (
        <p>Nothing found</p>
      )}
    </List>
  );
}

// ContactList.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       onDelete: PropTypes.func,
//     })
//   ).isRequired,
// };

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`;
