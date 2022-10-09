import * as yup from 'yup';

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
export default schema;
