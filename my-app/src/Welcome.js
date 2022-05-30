import React from 'react'
import { Age } from './Age'

export class Welcome extends React.Component{
    render(){
    let scelta;
    
    
        if(this.props.name==='John'){
           scelta=  <p> Welcome {this.props.name}</p>
        }
        return(
            <p>

         {scelta}
     {this.props.name==='John'&&  <p> Welcome {this.props.name}</p> }
            
          
      
        {(this.props.age > 18 && this.props.age < 65) && <Age age = {this.props.age}/>}

        </p>
        )
    }

}
 