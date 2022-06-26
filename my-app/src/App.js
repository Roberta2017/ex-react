
import {DisplayLanguage} from './DisplayLanguage'
import {Context} from './Context'
import React from 'react';

export class App extends React.Component{
  state = {
    language : 'en'
  }


  languageHandler = (event) => {
    this.setState((state)=>{
      return{language: state.language = event.target.value}
    })
  }
  render(){
    return(
      <div>
        <select value={this.state.language} onChange = {this.languageHandler}>
          <option value ='it'>Italiano</option>
          <option value ='en'>English</option>
          <option value ='de'>Deutch</option>
        </select>
        <Context.Provider value = { this.state.language}>
          <DisplayLanguage/>
        </Context.Provider>
      </div>
    )
    
  }
}
