import React, { useState } from 'react';

const Form = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      onAddTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo..."
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default Form;
