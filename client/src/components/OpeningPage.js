import Login from './Login'
import CreateAccount from './CreateAccount'
import Signup from './Signup'
import React, {useState} from 'react'


function OpeningPage({onLogin}){


    const [showLogin,setShowLogin]=useState(false)
    const [showSignUp,setShowSignUp]=useState(false)
    const [showCreate,setShowCreate]=useState(false)

    function onLoginClick(){
        setShowLogin(true)
        setShowSignUp(false)
        setShowCreate(false)
    }

    function onSignupClick(){
        setShowSignUp(true)
        setShowLogin(false)
        setShowCreate(false)
    }

    function onCreateClick(){
        setShowCreate(true)
        setShowLogin(false)
        setShowSignUp(false)
    }


    return <div>
        <h1 className="mainHeading">Welcome to the Book Club!</h1>
    <div className="openingBackground">
        <div className="openingItems">
            
            <div className="loginOptionsList">
                <h1 className="loginOption" onClick={onCreateClick}>Create A Club</h1>
                <h4 className="smallerHeading">Here to join a club?</h4>
                <button className="loginOption" onClick={onSignupClick}>Sign up</button>
                <h4 className="smallerHeading">Already part of a club?</h4>
                <button className="loginOption" onClick={onLoginClick}>Login</button>
            </div>
        </div>
        <div className="rightSide">
            {showSignUp?
            <Signup onLogin={onLogin} onSignupClick={onSignupClick}/>:
            showLogin?
            <Login onLogin={onLogin} onLoginClick={onLoginClick}/>:
            showCreate?<CreateAccount onLogin={onLogin} onCreateClick={onCreateClick}/>:null}
        </div>
    </div>
    </div>
}

export default OpeningPage