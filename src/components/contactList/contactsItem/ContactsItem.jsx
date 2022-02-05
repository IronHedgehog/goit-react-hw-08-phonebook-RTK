import PropTypes from 'prop-types';

const ContactItem = ({ contacts, deleteContact }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p name={name}>
              {name}: {number}
            </p>
            <button type="button" onClick={e => deleteContact(id)}>
              delete
            </button>
          </li>
        );
      })}
    </>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
