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

onLogin() {
    console.log(this.state)
}

    render(){
        return(
            <div>
                <div><input name="name" value={this.state.name} placeholder="insert your name" onChange = {this.handleChange}  /></div>
                <div><input type="password" name="password" value={this.state.password} placeholder="insert your password" onChange = {this.handleChange} /></div>
                <div><label>Check me</label>
                <input type="checkbox" onChange = {this.handleCheck} /></div>
                <div><button disabled = {(this.state.name === '' || this.state.password === '') ? true :false} onClick={this.onLogin}>Invia</button></div>
            </div>
            
        )
    }
}

