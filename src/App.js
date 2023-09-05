import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';


function App() {
  return (
      <div className="App">
        <h1 className='m-3'>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
  );
}

export default App;
