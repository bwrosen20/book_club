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

