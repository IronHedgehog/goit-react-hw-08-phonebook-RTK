import { Component, PureComponent } from 'react/cjs/react.production.min';
import './App.css';
import ContactList from './components/contactList/ContactList';
import Filter from './components/Filter/Filter';
import Form from './components/form/Form';

class App extends PureComponent {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const storageData = localStorage.getItem('contacts');
    const parsedStorageData = JSON.parse(storageData);

    if (parsedStorageData) {
      this.setState({
        contacts: parsedStorageData,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  plusContactState = contact => {
    if (
      this.state.contacts.find(
        contacts => contacts.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(`${contact.name}` + ' is already in contacts');
    } else {
      this.setState(prev => ({ contacts: [...prev.contacts, contact] }));
    }
  };

  plusFilterState = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  filterByName = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return filteredContacts;
  };

  deleteContact = id =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));

  render() {
    const { plusContactState, plusFilterState, filterByName, deleteContact } =
      this;
    return (
      <>
        <h1>Phonebook</h1>
        <Form plusContactState={plusContactState} />
        <h2>Contacts</h2>
        <Filter plusFilterState={plusFilterState} filter={this.state.filter} />
        <ContactList contacts={filterByName()} deleteContact={deleteContact} />
      </>
    );
  }
}

export default App;
