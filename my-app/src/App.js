import React from 'react'
import  Welcome  from './Welcome';
import Sum from './Sum'

function App() {
  return (
    <div className="App">
      <Welcome/>
      <Sum num={[1,2,3,4]}/>
    </div>
  );
}

export default App;
