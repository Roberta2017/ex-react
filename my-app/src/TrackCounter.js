import React from "react";


export class TrackCounter extends React.Component {

    state = {
        name: ' ,',
    }
    handleCounterIncrement = ((event)=>{
        console.log(event)
        this.setState ((state)=>{
            return{
                name: state.name = event.target.name
            }
        })
    })




        render(){
            return (
                <div>
                    <h1>l'ultimo bottone premuto è :{this.state.name}</h1>
                    <button name="click" onClick={this.handleCounterIncrement}>click</button>
                    <button name="clock" onClick={this.handleCounterIncrement}>clock</button>
                    <button name="clack" onClick={this.handleCounterIncrement}>clack</button>
                </div>
            )
        }

    }        



