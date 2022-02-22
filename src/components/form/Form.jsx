import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { Oval } from 'react-loader-spinner';
import { useState } from 'react';
import { useAddContactMutation } from '../../redux/phonebook/phonebookSlice';

const Form = ({ contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, { isLoading }] = useAddContactMutation();
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      // eslint-disable-next-line no-useless-concat
      alert(`${name}` + ' is already in contacts');
    } else {
      const user = {
        name,
        number,
      }
      console.log(name, number);
      addContact(user);
      Notiflix.Notify.success(`${name}     ${number} added to phonebook`);
    }
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
        />
      </label>
      <br />
      <label>
        <span>Phone</span>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
        />
      </label>
      <br />
      <button type="submit">addContact</button>
    </form>
  );
};

export default Form;

Form.propTypes = {
  contacts: PropTypes.array.isRequired,
};
