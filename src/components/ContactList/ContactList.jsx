import { Box } from '../Box';
import { ContactItem, ContactData, ButtonDelete } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContacts } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(contacts);
  console.log(filter);
  const dispatch = useDispatch();
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();
  return (
    <Box
      p="16px"
      border="2px solid Lavender"
      borderRadius="10px"
      boxShadow="inset 15px 0 15px  -15px #000 , inset -15px 0 15px  -15px #000"
    >
      <ul>
        {visibleContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <ContactData>
              {name}: {number}
            </ContactData>
            <ButtonDelete onClick={() => dispatch(deleteContacts(id))}>
              Delete
            </ButtonDelete>
          </ContactItem>
        ))}
      </ul>
    </Box>
  );
};

export default ContactList;
