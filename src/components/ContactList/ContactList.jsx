import { Box } from '../../common/Box';
import { ContactItem, ContactData, ButtonDelete } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selecttVisibleContacts } from 'redux/selectors';
import { deleteContact } from '../../redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selecttVisibleContacts);

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
            <ButtonDelete onClick={() => dispatch(deleteContact(id))}>
              Delete
            </ButtonDelete>
          </ContactItem>
        ))}
      </ul>
    </Box>
  );
};

export default ContactList;
