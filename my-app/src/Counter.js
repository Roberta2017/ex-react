import {useCounter} from './useCounter'

export default function Counter(){
const {increment,decrement,reset,counter}=useCounter()
    return(
        <div>
            <h1>{counter}</h1>
<button onClick={increment}>increment</button>
<button onClick={decrement}>decrement</button>
<button onClick={reset}>reset</button>        </div>
    )
}