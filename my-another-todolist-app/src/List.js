import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { toggleTodo } from './actions';

const List = ({ todos, toggleTodo, onDelete }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ListItem
          key={index}
          todo={todo}
          onToggle={() => toggleTodo(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, { toggleTodo })(List);
