import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Counter from './Counter'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ='counter' element ={<Counter />} />
      </Routes>
     
    </div>
  );
}

export default App;
