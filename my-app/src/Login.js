import React from "react";

export class Login extends React.Component{
    state = {
        name: '',
        password: '',
        checked: ''

    }
handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({[key]: value})
}


handleCheck = ( event) => {
    const name= event.target.name
    const check = event.target.checked;
    this.setState(
        {[name]: check}
    )
}

componentDidUpdate() {
    console.log(this.state)
}

    render(){
        return(
            <div>
                <input name="name" placeholder="insert your name" onChange = {this.handleChange}  />
                <input type="password" placeholder="insert your password" onChange = {this.handleChange} />
                <label>Check me</label>
                <input type="checkbox" onChange = {this.handleCheck} />
            </div>
        )
    }

}