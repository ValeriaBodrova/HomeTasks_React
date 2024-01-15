import React from 'react';
import PropTypes from 'prop-types';


const ListItem = ({ item, onToggle, onDelete }) => {
  return (
    <li
      className={`todo-item ${item.isDone ? 'done' : ''}`}
      onClick={(e) => onToggle(item.id)}
    >
      <span>{item.text}</span>
      <button onClick={(e) => onDelete(item.id)}>Delete</button>
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};


export default ListItem;