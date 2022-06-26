import React from "react";
import  Context from "./Context";
import  useContext  from "react";

function DisplayLanguage(){
    const language = useContext(Context)
    return(
        <div>
            <h1>
                language: {language}
            </h1>
        </div>
    )
}

export default DisplayLanguage