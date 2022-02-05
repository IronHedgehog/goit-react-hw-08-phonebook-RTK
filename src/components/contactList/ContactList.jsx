import PropTypes from 'prop-types';
import ContactItem from './contactsItem/ContactsItem';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul>
        <ContactItem contacts={contacts} deleteContact={deleteContact} />
      </ul>
    </>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
