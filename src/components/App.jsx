import Section from './Section/Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { GlobalStyle } from './GlobalStyle';
import { Box } from '../common/Box';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
        <ContactForm />
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </Section>
    </Box>
  );
};

export default App;
