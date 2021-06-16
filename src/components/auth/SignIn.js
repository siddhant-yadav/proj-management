import React, { Component } from 'react'

import './SignIn.css'

class SignIn extends Component {

    state = {
        email : "",
        password : "",
    }
    
    handleChange = (e) =>
    {
        this.setState(
            {
                [e.target.id] : e.target.value
            }
            )
    }
        
        
    handleSubmit = (e) =>
        { return(
            e.preventDefault(),
            console.log(this.state)
        )
        }
        
    render() {
        return (
            <div className = "container">
                <form onSubmit = {this.handleSubmit} className = "border">
                    <h5 className = "white-text text-darken-3">SignIn</h5>

                    <div className = "input-field" >
                        <label htmlFor = "email" >E-mail</label>
                        <input type = "email" id = "email" className = "white-text" onChange = {this.handleChange} />
                    </div>
                
                    <div className = "input-field" >
                        <label htmlFor = "password" >Password</label>
                        <input type = "password" id = "password" className = "white-text" onChange = {this.handleChange} />
                    </div>
                
                    <div className = "input-field" >
                        <button className = "btn pink lighten-1 z-depth-0" >Log In</button>
                    </div>

                </form>
                
            </div>
        )
    }
}

export default SignIn
