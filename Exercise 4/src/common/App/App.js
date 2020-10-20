import React from 'react';
import {TodoClass} from '../../todo';
import {Todo} from '../../todo';

function App() {
  return (
    <>
      <TodoClass />,
      <Todo isVisible={true} />
    </>
  );
}

export default App;
