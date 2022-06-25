import { useState } from "react";


export function useCounter(initialValue=0){
    const [counter, setCounter]=useState(initialValue)


    function increment(){
        setCounter( counter => counter + 1)
    }

    function decrement(){
        setCounter(counter => counter - 1)
    }

    function reset(){
        setCounter(initialValue)
    }


    return{increment, decrement, reset, counter}
}