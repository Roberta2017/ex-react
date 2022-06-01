import React from "react"



export class Counter extends React.Component{
    
    state = {
        counter:0
    }
    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return {counter:state.counter + 1}
            })
        },100)
    }
    render() {
        return <h1>Counter: {this.state.counter}</h1>
    }
}
