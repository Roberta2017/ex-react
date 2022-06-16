import {useEffect, useState } from "react"

 function Counter ({onCounterChange}){
    const [counter, setCounter] = useState(0)
      
     useEffect(()=> {
        onCounterChange(counter)
     }, [counter])

    

    let handleCounterIncrement = () => {
        setCounter(count => count +1)
    }
    return(
        <div>
            <h2>Counter: {counter} </h2>
            <button onClick={handleCounterIncrement}>Increment</button>
            <h1>{counter}</h1>
        </div>
    )
} 

export default Counter