import React from 'react';
import ListItem from './ListItem';

const List = ({ todos, onToggle, onDelete }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ListItem
          key={index}
          todo={todo}
          onToggle={() => onToggle(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
};

export default List;
