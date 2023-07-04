import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar({name, onLogout}){

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
            to="/members"
            exact
           
            activeStyle={{
                color:"black",
            }}
            className="navOption"
            >
                Members   
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

            <p className="welcome">Welcome {name}!</p>

            <div className="login">
                <button onClick={onLogout}>Logout</button>
            </div>


    </div>
}

export default NavBar