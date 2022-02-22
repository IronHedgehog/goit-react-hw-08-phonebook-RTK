import { useState } from 'react';
import './App.css';
import ContactList from './components/contactList/ContactList';
import Filter from './components/Filter/Filter';
import Form from './components/form/Form';
import { useFetchContactsQuery } from './redux/phonebook/phonebookSlice';
// import { Oval } from 'react-loader-spinner';

const App = () => {
  const [filter, setFilter] = useState('');
  const { data: contacts, isFetching } = useFetchContactsQuery();

  const plusFilterState = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const filterByName = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return filteredContacts;
  };
  return (
    <>
      <h1>Phonebook</h1>
      {contacts && <Form contacts={contacts} />}
      <h2>Contacts</h2>

      <Filter filter={filter} filterfunc={plusFilterState} />
      {/* {isFetching && <Oval color="#00BFFF" height={80} width={80} />} */}
      {contacts && <ContactList contacts={filterByName()} />}
    </>
  );
};

export default App;
