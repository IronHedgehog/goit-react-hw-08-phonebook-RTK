import PropTypes from 'prop-types';
import {
  getVisibleContacts,
} from '../../../redux/phonebook/phonebook-selector';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../../redux/phonebook/phonebook-actions';

const ContactItem = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  return (
    <>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p name={name}>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => dispatch(actions.deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
};
export default ContactItem;
