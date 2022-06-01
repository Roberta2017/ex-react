import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
    state ={
    
        count: this.props.initialValue
    }
    constructor(props){
        super(props)

        setInterval(() =>{
            this.setState({
              
                count: this.state.count + (this.props.incrementBy)
            })
        }, 1000)
    }
    render(){
        return(
            <div>
              
                <CounterDisplay count={this.state.count}/>
            </div>
        )
    }
}

Counter.defaultProps = {
    initialValue: 15,
    timeout: 1000,
    incrementBy: 1
}
