import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar(){

    return <div>
        <NavLink
            to="/"
            exact
            
            activeStyle={{
                color:"black",
            }}
            className="navOption"
            >
                Home 
            </NavLink>
        <NavLink
            to="/voting"
            exact
           
            activeStyle={{
                color:"black",
            }}
            className="navOption"
            >
                Next Book   
            </NavLink>

    </div>
}

export default NavBar