import {useRef, useState, useEffect} from 'react'

function CarDetails({initialDate}){
    const modelRef = useRef()
    const colorRef = useRef()
    const yearRef = useRef()
    const [model, setModel] = useState('')
    const [color, setColor] =useState('')
    const [year, setYear] = useState('')

    function modelHandler(event){
        setModel(event.target.value)
    }

    function colorHandler(event){
        setColor(event.target.value)
    }
    function yearHandler(event){
        setYear(event.target.value)
    }

    useEffect(()=>{
        modelRef.current.focus()
    },[])

    useEffect(()=>{
        modelRef.current.value=initialDate.model;
        colorRef.current.value=initialDate.color;
        yearRef.current.value=initialDate.year;
    },[initialDate])


    function visualCar(event){
        return(
              console.log(initialDate.model, initialDate.color, initialDate.year)
           )
        
    }
return(
    <div>
        <label>Model:</label>
        <input type='text' value = {model} ref={modelRef} onChange={modelHandler} defaultValue={initialDate.model} /> <br/>
        <label>color:</label>
        <input type='text' value = {color} ref={colorRef} onChange={colorHandler} defaultValue={initialDate.color} /> <br/>
        <label>Anno:</label>
        <input type='text' value = {year} ref={yearRef} onChange={yearHandler} defaultValue={initialDate.year} /> <br/>
        <button onClick={visualCar}>INVIO</button>
    </div>
)



}export default CarDetails