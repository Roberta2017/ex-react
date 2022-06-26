import { useState } from 'react';
import {DisplayLanguage} from './DisplayLanguage'
import Context from './Context'
import React from 'react';

function App(){
  const [language, setLanguage] = useState('')



  function languageHandler(event){
    setLanguage(event.target.value)
  }


  return(
    <div>
      <select value={language} onChange={languageHandler}>
        <option value="it">Italiano</option>
        <option value="en">English</option>
      </select>
   <Context.Provider value ={language}>
    <DisplayLanguage/>
   </Context.Provider>
    </div>
  )
}
export default App