import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todosProps }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem itemProp={todo} />
    ))}
  </ul>
);

TodosList.propTypes = {
  todosProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default TodosList;
