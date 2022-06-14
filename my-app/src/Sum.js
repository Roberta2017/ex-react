import React from "react";

function Sum({num=[1,2,3,4]}){
    return(
        <div>
          <h1> la somma è {num.reduce((total, current) => { return (total += current) })}</h1>
        </div>
        
    )
}


export default Sum