import React from "react";

export class Container extends React.Component{
state = {
    list: ['Sushi', 'Sashimi']
}

deleteHandler = (item) => {
    const array = this.state.list.filter((items) => items !== item);
    this.setState({
        list: this.state.list= array
    })
}


    render(){
        return(

            <div>
                {this.props.children(this.state.list, this.deleteHandler)}

            </div>
        )
    }
}