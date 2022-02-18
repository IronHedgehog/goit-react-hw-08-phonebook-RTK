import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/addContact', (name, number) => ({
  payload: {
    name,
    number,
    id: shortid.generate(),
  },
}));
const deleteContact = createAction('phonebook/deleteContact');
const filterValue = createAction('phonebook/filterValue');

const phoneBookActions = {
  addContact,
  deleteContact,
  filterValue,
};
export default phoneBookActions;
