import React from 'react'

function NavBar({name, onNavClick}){

    return <div className="Navbar">
            <select className="login" onChange={onNavClick}>
                <option 
                defaultValue disabled>
                    Navigate
                </option>
                <option
                value=""
                >Home</option>
                <option
                value="voting"
                >Voting</option>
                <option
                value="members"
                >Members</option>
                <option
                value="current-book"
                >Current Book</option>
                <option
                value="logout"
                >Logout</option>
            </select>
        <p className="welcome">Welcome {name}!</p>
    </div>
}

export default NavBar



{/* <NavLink
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

            

            <div className="login">
                <button onChange={onLogout}>Logout</button>
            </div> */}

