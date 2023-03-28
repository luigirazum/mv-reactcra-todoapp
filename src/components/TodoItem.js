import PropTypes from 'prop-types';

const TodoItem = ({ itemProp }) => (
  <li>
    {/* INI #raising-handling-events */}
    <input type="checkbox" />
    {itemProp.title}
  </li>
);

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoItem;
