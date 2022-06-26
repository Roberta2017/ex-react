import { useCallback, useState } from "react";


export function useCounter(initialValue=0){
    const [counter, setCounter]=useState(initialValue)


    const IncrementHandler= useCallback(function IncrementHandler(){
        setCounter( counter => counter + 1)
    },[])

    const DecrementHandler= useCallback(function DecrementHandler(){
        setCounter(counter => counter - 1)
    },[])

    const ResetHandler = useCallback(function ResetHandler(){
        setCounter(initialValue)
    },[initialValue])


    return{
        counter : counter,
        onIncrement: IncrementHandler,
        onDecrement: DecrementHandler,
        onReset: ResetHandler}



}

export default useCounter