import React from "react";



export class TodoList extends React.Component{
    state={
        items: [''],
    } 
    buttonOnClick = (event) =>{
        event.preventDefault()
        this.setState({
            items: [...this.state.items, event.target.elements.items.value],

        })

       

        event.target.reset() 
     }
     handleReset = () => {
        this.setState({
          items: [''],
        });
      };

   




    render(){

        return(
            <div>
                <ul>{Object.values(this.state.items).map(param => <li>{param}</li>)} </ul>
                <form onSubmit = {this.buttonOnClick}>
                    <input name="items" type="text" />
                    <button type ="submit">Click me</button>
                    <button onClick={this.handleReset} type ="submit">reset me!</button>

                </form>

               
            </div>
        )
        
        
        


    }
}

   