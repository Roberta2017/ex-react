import React from "react";


export class Counter extends React.Component{
    state ={
        /* count: this.props.initialValue ?? 0 */
        count: this.props.initialValue
    }
    constructor(props){
        super(props)

        setInterval(() =>{
            this.setState({
               /*  count: this.state.count + (this.props.incrementBy ?? 1) */
                count: this.state.count + (this.props.incrementBy)
            })
        }, 1000)
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
            </div>
        )
    }
}

Counter.defaultProps = {
    initialValue: 15,
    timeout: 1000,
    incrementBy: 1
}
