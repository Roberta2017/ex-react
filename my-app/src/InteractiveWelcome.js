import React from 'react'
import {Welcome} from './Welcome'

export class InteractiveWelcome extends React.Component{
    state = {
    name:"",
    }
    changestate=(event)  =>{
        this.setState ((state)=>{return{name: state.name = event.target.value}})
            
    }


render (){
    return (
        <div>
       <input type="text" onChange={this.changestate} value={this.state.name}/>
       <Welcome name = {this.state.name}/>
        </div>
    )
}

}