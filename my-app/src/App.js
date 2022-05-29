import React from 'react';
import { Hello } from './Hello';

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
                <Hello/>
            </div>
        )
    }
}