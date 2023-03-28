import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, setTodos }) => (
  <li>
    <input type="checkbox" />
    {itemProp.title}
  </li>
);

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default TodoItem;
