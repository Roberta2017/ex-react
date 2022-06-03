import React from "react";


 export class Counter extends React.Component {

    state = {
        count : 0,
    }


    handleCounterIncrement = () => {
        this.setState((state) => {
            return {
                count : state.count + 1,
            }
        })
    }

    render() {
        return (
            <div>
                <h1>
                    Count: {this.state.count}
                    <button onClick = {this.handleCounterIncrement}>Click me for increment!</button>
                </h1>
            </div>
        )
    }
}

 




