import React from 'react';
import { Welcome } from './Welcome';


/* function App(){
    return (
        <div>
        <Hello/>
        </div>
    )
}
export default App */


export class App extends React.Component{
    render(){
        return(
            <div>
              
                <Welcome name={'Giorgio'} age={'29'}/>
                
                
            </div>
        )
    }
}