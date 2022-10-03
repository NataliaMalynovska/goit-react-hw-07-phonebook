import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { Box } from '../Box';
import { Label, ButtonSubmit } from './ContactForm.styled';

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
const namePattern =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const nameErr =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const numberPattern =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const numberErr =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
const errorMessage = 'This field is required';

const schema = yup.object().shape({
  name: yup.string().required(errorMessage).matches(namePattern, nameErr),
  number: yup
    .string()
    .min(6, 'Too Short!')
    .max(16, 'Too Long!')
    .required(errorMessage)
    .matches(numberPattern, numberErr),
});
const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
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
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
