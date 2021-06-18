import React, { Component } from 'react'

import './SignIn.css'

class SignUp extends Component {

    state = {
        email : "",
        password : "",
        confirmPassword : "",
        firstName : "",
        lastName : ""
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
        (this.state.confirmPassword === this.state.password) ? ( console.log(this.state) ) : alert("pass don't Match")
        
    )}

    
    render() {

    
        return (
            <div className = "container" >
                <form onSubmit = {this.handleSubmit} className = "border" >
                    <h5 className = "white-text text-darken-3">SignUp</h5>

                    <div className = "input-field" >
                        <label >First Name</label>
                        <input type = "text" id = "firstName" className = "white-text" onChange = {this.handleChange} />
                    </div>

                    <div className = "input-field" >
                        <label >Last Name</label>
                        <input type = "text" id = "lastName" className = "white-text" onChange = {this.handleChange} />
                    </div>


                    <div className = "input-field" >
                        <label htmlFor = "email" >E-mail</label>
                        <input type = "email" id = "email" className = "white-text" onChange = {this.handleChange} />
                    </div>
                
                    <div className = "input-field" >
                        <label htmlFor = "password" >Password</label>
                        <input type = "password" id = "password" className = "white-text" onChange = {this.handleChange} />
                    </div>
                
                    <div className = "input-field " >
                        <label htmlFor = "password" >Confirm Password</label>
                        <input type = "password" id = "confirmPassword" className = "white-text" onChange = {this.handleChange} />
                    </div>
                
                    <div className = "input-field" >
                        <button className = "btn pink lighten-1 z-depth-0" >Sign Up</button>
                    </div>

                </form>
                
            </div>
        )
    }
}

export default SignUp
