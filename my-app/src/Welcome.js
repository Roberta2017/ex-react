import React from 'react'
import { Age } from './Age'

export class Welcome extends React.Component{
    render(){
        return(
            <p>
        welcome {this.props.name}
            
           {this.props.age && <Age age ={this.props.age}/>}
        </p>
        )
    }

}
