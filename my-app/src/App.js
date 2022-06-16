import React from 'react';
import Counter from './Counter'

function App() {

  function onCounterChange(count){
    console.log(`counter: ${count}`)
  }
  return (
    <div className="App">
      <Counter onCounterChange={onCounterChange}/>
    </div>
  );
}

export default App;
