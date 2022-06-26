import React from "react";
import { Context } from "./Context";

let testo = {
    it:{
        testo: "benvenuto! come ti chiami?"
    },

    en:{
        testo: "Welcome! what's your name?"
    }
}

export class DisplayLanguage extends React.Component{
    render(){
        return(
            <Context.Consumer>
                {language => {
                    return(
                        <div>
                            <p>
                                {testo[language].testo}
                            </p>
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}