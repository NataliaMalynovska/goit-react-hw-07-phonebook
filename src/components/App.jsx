import Section from './Section/Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { useDispatch } from 'react-redux';
import { useSelector} from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/selectors';

import {fetchContacts, addContact} from 'redux/operations';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
dispatch(fetchContacts());
  }, [dispatch])
  const contacts = useSelector(getContacts);

  const formSubmitHendler = ({ name, number }) => {
    console.log({ name, number })
    const newName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (newName) {
      return alert(`Sorry, ${name} is already in your contacts`);
    } else {
      dispatch(addContact({name, number}));
    }
  };

  return (
    <Box
      as="main"
      backgroundColor="#c3c8db"
      m="16px"
      p="16px"
      width="560px"
      mr="auto"
      ml="auto"
    >
      <GlobalStyle />
      <Section title="Phonebook">
        <ContactForm 
        onSubmit={formSubmitHendler} 
        />
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </Section>
    </Box>
  );
};

export default App;
