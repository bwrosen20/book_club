import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar(){

    return <div className="Navbar">
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
                Voting   
            </NavLink>
            <NavLink
            to="/users"
            exact
           
            activeStyle={{
                color:"black",
            }}
            className="navOption"
            >
                Users   
            </NavLink>
            <NavLink
            to="/current-book"
            exact
           
            activeStyle={{
                color:"black",
            }}
            className="navOption"
            >
                Current Book   
            </NavLink>


    </div>
}

export default NavBar