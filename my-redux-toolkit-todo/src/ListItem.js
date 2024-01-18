import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from './todosSlice';

const ListItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const [isHidden, setIsHidden] = useState(false);

  const handleToggle = () => {
    dispatch(toggleTodo({ id: todo.id }));
    setIsCompleted(!isCompleted);
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
    setIsHidden(true);

};
if (isHidden) {
    return null; 
  }

  return (
    <li>
      <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={handleToggle}>
        {isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ListItem;
