import { useCounter } from "./useCounter";

function HookCounter({initialValue = 0}){
    const {counter, onIncrement, onDecrement, onReset} = UseCounter (initialValue)

    return(
    <div>
        <h2>Counter :{counter} </h2>
        <button onClick = {onIncrement}>Increment</button>
        <button onClick = {onDecrement}>Decrement</button>
        <button onClick = {onReset}>reset</button>
    </div>
        )
} export default HookCounter