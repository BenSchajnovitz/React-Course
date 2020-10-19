import React from 'react';
import TodoListClass from '../../TodoList/TodoListClass';
import TodoList from '../../TodoList/TodoList';

function App() {
  return (
    <>
      <TodoListClass />,
      <TodoList isVisible={true} />
    </>
  );
}

export default App;
