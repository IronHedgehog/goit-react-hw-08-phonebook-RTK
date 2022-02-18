import { useState, useEffect } from 'react';
import './App.css';
import ContactList from './components/contactList/ContactList';
import Filter from './components/Filter/Filter';
import Form from './components/form/Form';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from './redux/phonebook/phonebook-selector';

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

  // const storageData = localStorage.getItem('contacts');
  // const parsedStorageData = JSON.parse(storageData);

  // const [contacts, setContacts] = useState([]);
  // const contacts = useSelector(getContacts);
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

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const plusFilterState = e => {
  //   const { value } = e.target;
  //   setFilter(value);
  // };

  // const filterByName = () => {
  //   const filteredContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  //   return filteredContacts;
  // };

  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
