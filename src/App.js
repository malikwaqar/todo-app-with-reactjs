import React, { useState } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';

function App() {
  const [todos, setTodos] = useState(['Wake up early in the morning', 'Have a nice breakfast']);
  const [input, setInput] = useState('');
  // console.log(input);
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>
      <FormControl>
        <InputLabel>Enter a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value) }  />
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
      </form>
      
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
