import { ToastContainer } from 'react-toastify';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import {
  MainContainer,
  MainTitle,
  ContactsTitle,
  FilterTitle,
} from './App.styled';

export const App = () => {
  return (
    <>
      <ToastContainer />
      <MainContainer>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        <FilterTitle>Find contacts by name</FilterTitle>
        <Filter />
        <ContactList />
      </MainContainer>
    </>
  );
};