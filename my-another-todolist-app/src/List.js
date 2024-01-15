import React from 'react';
import ListItem from './ListItem';
import { toggleTodo, deleteTodo } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from './selectors';

 const List = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectTodos);
  const toggleHandler = (id) => {
    dispatch(toggleTodo(id));
  };
  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <ul>
      {list.map((todo) => (
        <ListItem
          key={todo.id}
          item={todo}
          onToggle={toggleHandler}
          onDelete={deleteHandler}
        />
      ))}
    </ul>
  );
};
export default List;