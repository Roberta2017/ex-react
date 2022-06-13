import React from "react";


export class Login extends React.Component {
    state = {
        username: "",
        password: "",
        checked: false,
    };
    handleInputChange = (event) => {
        let value = '';
        const name = event.target.name;
        event.target.type === 'checkbox' ? value = event.target.checked :value = event.target.value;
        
        this.setState({
            [name]: value,
        });
    };
    onLogin = () => {
      console.log(this.state)
    }



    handleResetState = () => {
      this.setState({
        username: "",
        password: "",
        checked: false,
      })

    }
    render() {
        const backgroundStyle = {
            backgroundColor: this.state.password.length > 8 ? 'green' : 'red',
          }



return(
    <div>
       <input type="text" onChange={this.handleInputChange}  value={this.state.username}name="username" />
        
        <input  type="password"onChange={this.handleInputChange}value={this.state.password}name="password"/>
        
        <input type="checkbox"onChange={this.handleInputChange} checked={this.state.checked}name="checked"/>
         
          
         
          
        
       
       <button onClick={this.onLogin}disabled={!this.state.username || this.state.password.length <= 8 ? true : false} style={backgroundStyle}>Cliccami!</button>
 
        
        <button onClick={this.handleResetState}>Reset</button>
      </div>
    )}};
        
  

