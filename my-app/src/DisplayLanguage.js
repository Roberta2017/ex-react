import React from "react";
import { Context } from "./Context";

let testo = {
    it:{
        testo: "benvenuto! come ti chiami?"
    },

    en:{
        testo: "Welcome! what's your name?"
    },

    de:{
        testo: "willkommen! wie heiße du?"
    }
}

export class DisplayLanguage extends React.Component{
    render(){
        return(
            <Context.Consumer>
                {language => {
                    return(
                        <div>
                            <h1>
                                {testo[language].testo}
                            </h1>
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}