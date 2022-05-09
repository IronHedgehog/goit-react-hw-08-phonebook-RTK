import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../../redux/phonebook/phonebookSlice';
import { ThreeDots } from 'react-loader-spinner';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li>
      <p name={name}>
        {name}: {number}
      </p>
      <button
        disabled={isLoading}
        type="button"
        onClick={() => deleteContact(id)}
      >
        {isLoading ? (
          <ThreeDots color="#ff0000" height={20} width={20} />
        ) : (
          'Delete'
        )}
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
