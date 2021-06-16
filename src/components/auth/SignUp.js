import React, { Component } from 'react'

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
            <div className = "container">
                <form onSubmit = {this.handleSubmit} className = "white" >
                    <h5 className = "grey-text text-darken-3">SignUp</h5>

                    <div className = "input-field" >
                        <label >First Name</label>
                        <input type = "text" id = "firstName" onChange = {this.handleChange} />
                    </div>

                    <div className = "input-field" >
                        <label >Last Name</label>
                        <input type = "text" id = "lastName" onChange = {this.handleChange} />
                    </div>


                    <div className = "input-field" >
                        <label htmlFor = "email" >E-mail</label>
                        <input type = "email" id = "email" onChange = {this.handleChange} />
                    </div>
                
                    <div className = "input-field" >
                        <label htmlFor = "password" >Password</label>
                        <input type = "password" id = "password" onChange = {this.handleChange} />
                    </div>
                
                    <div className = "input-field" >
                        <label htmlFor = "password" >Confirm Password</label>
                        <input type = "password" id = "confirmPassword" onChange = {this.handleChange} />
                    </div>
                
                    <div className = "input-field" >
                        <button className = "btn blue lighten-1 z-depth-0" >Sign Up</button>
                    </div>

                </form>
                
            </div>
        )
    }
}

export default SignUp
