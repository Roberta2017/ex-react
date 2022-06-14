import React from "react";

function Sum(props){
    return(
        <h1>la somma è {props.num.reduce((total, current) => { return (total += current)})}</h1>
    )
}


export default Sum