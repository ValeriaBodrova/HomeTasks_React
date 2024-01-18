import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todosSlice'; // Імпортуємо action creator з Slice

const Form = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === '') {
      return;
    }

    dispatch(addTodo(text)); // Викликаємо action creator для додавання todo
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleInputChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default Form;
