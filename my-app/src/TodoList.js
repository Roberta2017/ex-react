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

   
      handleRemove = (event) =>{
        console.log()
        this.setState((state)=>{
            return{
                items: state.items.filter((items) =>{
                return items !== event.target.previousSibling.innerText
                })
            }
        })
      }




    render(){

        return(
            <div>
                <ul>{Object.values(this.state.items).map(items => 
                <div>
                    <li key={items.id}>{items}</li>
                    <button onClick={this.handleRemove}>Remove</button>
                </div>
                    )}</ul>
                <form onSubmit = {this.buttonOnClick}>
                    <input name="items" type="text" />
                    <button type ="submit">Click me</button>
                    <button onClick={this.handleReset} type ="submit">reset me!</button>

                </form>

               
            </div>
        )
        
        
        


    }
}

   