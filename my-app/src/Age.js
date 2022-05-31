import React from "react";

export class Age extends React.Component{
    render(){
        return(
          <div>
              <p>{this.props.age >=18 ? `Your age is: ${this.props.age}` : 'Sei troppo giovane!'}
                   
                </p>
          </div>
        )
    }

}