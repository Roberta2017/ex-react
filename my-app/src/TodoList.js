import React from "react";

export class TodoList extends React.Component{

    state = {
        items : [''],
    }
buttonOnClick = (event => {
    event.preventDefault()
    this.setState(()=>{
        return{

        
            items : [...this.state.items, event.target.elements.items.value]
        }
    })
})




    render(){

        return(
            <div>
                <ul>{Object.values(this.state.items).map(param => <li>{param}</li>)} </ul>
                <form onSubmit = {this.buttonOnClick}>
                    <input name="items" type="text" />
                    <button type ="submit">Click me</button>

                </form>

               
            </div>
        )
        
        
        


    }
}

   