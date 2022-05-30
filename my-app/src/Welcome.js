import React from 'react'
import { Age } from './Age'

export class Welcome extends React.Component{
    render(){
        return(
            <p>
        welcome {this.props.name}
            
           {this.props.age > 18 ? <Age age ={this.props.age}/> : null}
        </p>
        )
    }

}
