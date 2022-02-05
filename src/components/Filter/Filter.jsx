import PropTypes from 'prop-types';
const Filter = ({ plusFilterState, filter }) => {
  return (
    <label>
      <span>filter by name</span>
      <input
        type="text"
        name="name"
        value={filter}
        onChange={plusFilterState}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        autoComplete="off"
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  plusFilterState: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
