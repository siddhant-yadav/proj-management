import React from 'react'
import { NavLink } from 'react-router-dom'

// import AvatarImage from '../images/LongHair_Siddhant.jpg'

const SignedOutLinks = () =>
{
    return(
        <ul className = "right">
            <li><NavLink to= "/" >Sign Up</NavLink></li>
            <li><NavLink to= "/" >Login</NavLink></li>
            {/* <li><NavLink to= "/" className = "btn btn-floating pink lighten-1" > SY </NavLink></li> */}
        </ul>
                
    )

}

export default SignedOutLinks;