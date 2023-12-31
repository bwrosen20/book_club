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
        <div className="openingContainer">
            <div className="openingRight">
                <img src={require('../MUSTACHE.png')} alt="logo" className="openingImage"/>
                <h3 style={{margin:"auto",textAlign:"center"}}>We'll host your book club</h3>
            </div>
        </div>
    <div className="openingBackground">
        <div className="openingItems">
            
            <div className="loginOptionsList">

                <h1 className="loginOption" onClick={onCreateClick}>Create A Club</h1>
                <br/>
                <h4 className="smallerHeading">Here to join a club? <span className="loginOption" onClick={onSignupClick}>Sign up</span></h4>
                <br/>
                <h4 className="smallerHeading">Already part of a club? <span className="loginOption" onClick={onLoginClick}>Login</span></h4>
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