import React from "react";

export class UncontrolLogin extends React.Component{
    handleFormSubmit = (e) => {
        e.preventDefault()
        const name = e.target.elements.name.value
        const password = e.target.elements.password.value
        const check = e.target.elements.check.checked

        console.log(name, password, check)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input name="name" /> <br>
                    </br>
                    <input name="password" type="password" /> <br>
                    </br>
                    <input name="check" type="checkbox" />
                    <button type="submit">Login</button>    
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }

}

