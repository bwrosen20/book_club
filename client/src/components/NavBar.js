import React, {useState} from 'react'
// import {UserContext} from './App'
import {NavLink,useHistory} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar({handleLogout}) {

    const [isOpen,setIsOpen] = useState(false)
    const history = useHistory()

    function toggleClass(){
      setIsOpen(!isOpen)
    }

    function goHome(){
      history.push("/")
    }

    return <header>

           
          
      <div className="navBar">
        <img src = {require("../MUSTACHE.png")} alt="logo" className="welcome" onClick={goHome}/>
      {/* <p className="welcome">Welcome {user.name}</p> */}
     

      <div className="navigation" >
        <ul className="navLinks" >
          <li>
            <NavLink
            className="navOption"
            to="/voting"
            exact>
              Voting
            </NavLink>
          </li>
          <li>
            <NavLink
            className="navOption"
            to="/current-book"
            exact>
              Current Book
            </NavLink>
          </li>
          <li>
            <NavLink
            className="navOption"
            to="/members"
            exact>
              Members
            </NavLink>
          </li>
          
        </ul>
        
      </div>
      <button className="logoutButton" onClick={handleLogout}>Logout</button>
      <div className="navBars" onClick={toggleClass}>
        {isOpen ? <FontAwesomeIcon icon="fa-solid fa-x" /> : <FontAwesomeIcon icon="fa-solid fa-book" />}
      </div>
      </div>
      <div className={isOpen ? "dropdownMenuOpen" : "dropdownMenu"} onClick={toggleClass}>
          <li>
            <NavLink
            className="navOption"
            to="/voting"
            exact>
              Voting
            </NavLink>
          </li>
          <li>
            <NavLink
            className="navOption"
            to="/current-book"
            exact>
              Current Book
            </NavLink>
          </li>
          <li>
            <NavLink
            className="navOption"
            to="/members"
            exact>
              Members
            </NavLink>
          </li>
          <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>

      </div>
      </header>
  }
  
  export default NavBar;