import { useState, useEffect } from 'react';
import './App.css';
import ContactList from './components/contactList/ContactList';
import Filter from './components/Filter/Filter';
import Form from './components/form/Form';

const App = () => {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  const test = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const storageData = localStorage.getItem('contacts');
  const parsedStorageData = JSON.parse(storageData);

  const [contacts, setContacts] = useState(() => parsedStorageData || test);
  const [filter, setFilter] = useState('');
  // componentDidMount() {

  //   if (parsedStorageData) {
  //     this.setState({
  //       contacts: parsedStorageData,
  //     });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const plusContactState = contact => {
    if (
      contacts.find(
        contacts => contacts.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      // eslint-disable-next-line no-useless-concat
      alert(`${contact.name}` + ' is already in contacts');
    } else {
      setContacts(prev => [...prev, contact]);
    }
  };

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

  const deleteContact = id =>
    setContacts(prev => prev.filter(item => item.id !== id));

  return (
    <>
      <h1>Phonebook</h1>
      <Form plusContactState={plusContactState} />
      <h2>Contacts</h2>
      <Filter plusFilterState={plusFilterState} filter={filter} />
      <ContactList contacts={filterByName()} deleteContact={deleteContact} />
    </>
  );
};

export default App;
