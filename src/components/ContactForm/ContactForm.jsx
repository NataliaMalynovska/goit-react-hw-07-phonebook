import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import schema from '../../common/schema';
import { Box } from '../../common/Box';
import { Label, ButtonSubmit } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';

const BoxForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;
const Input = styled(Field)`
  dislay: block;
  margin: 16px;
  padding: 8px;
  width: 240px;
  height: 40px;
  font-size: 18px;
  background: Lavender;
  border: 1px solid MidnightBlue;
  border-radius: 10px;
  transition: border 50ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 15px 16px 16px -5px rgba(0, 0, 0, 0.6);

  &:hover {
    transform: scale(1.05);
  }
`;
const Error = styled(ErrorMessage)`
  padding: 16px 0;
  font-size: 16px;
  color: Salmon;
`;

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    const newName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const newNumber = contacts.find(contact => contact.number === number);
    if (newName) {
      return alert(`Sorry, ${name} is already in your contacts`);
    } else if (newNumber) {
      return alert(`Sorry, ${number} is already in your contacts`);
    } else {
      dispatch(addContact({ name, number }));
    }
    actions.resetForm();
  };
  return (
    <Box
      p="16px"
      border="2px solid Lavender"
      borderRadius="10px"
      boxShadow="inset 15px 0 15px  -15px #000 , inset -15px 0 15px  -15px #000"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <BoxForm>
          <Label htmlFor="name">
            Name
            <Input type="text" name="name" />
            <Error name="name" component="div" />
          </Label>
          <Label htmlFor="number">
            Number
            <Input type="tel" name="number" />
            <Error name="number" component="div" />
          </Label>
          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </BoxForm>
      </Formik>
    </Box>
  );
};

export default ContactForm;
