import {useEffect, useState } from "react"

function Counter() {
    const [counter, setCounter] = useState(0)

    const intervalID = () => setInterval(() => { setCounter(counter + 1)
    
    }, 500)


    useEffect(() => { 
         intervalID()
    }, [counter])

    
    useEffect(() => {
        return () => {
            clearInterval(intervalID)
        }
    }, [])
    return <h1>Counter:{counter}</h1>
}


export default Counter