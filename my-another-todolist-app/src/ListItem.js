import React from 'react';

const ListItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span onClick={onToggle}>{todo.text}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default ListItem;
