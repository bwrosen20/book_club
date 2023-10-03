import React, { useState } from "react";
import {GoogleLogin} from 'react-google-login'

function Signup({ onLogin}) {

  const clientId = "213321703015-mrd4guaeltrl0iq0chmk79iec74ld518.apps.googleusercontent.com"
  const [name, setName] = useState("");
  const [email,setEmail] = useState("")
  const [groupName,setGroupName] = useState("")
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [favoriteBook,setFavoriteBook]=useState("")
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [googleWasUsed,setGoogleWasUsed] = useState(false)
  const [fileLoaded,setFileLoaded] = useState(false)


  function onSuccess(res){
    console.log(res)
    setGoogleWasUsed(true)
    setEmail(res.profileObj.email)
    setName(res.profileObj.givenName)
  }

  function loadedFile(e){
    setProfileImage(e.target.files[0])
    setFileLoaded(true)
  }


  function handleGoogleSubmit(e){
    e.preventDefault();
    setErrors([]);
    const formData= new FormData()
    formData.append('name',name)
    formData.append('email',email)
    formData.append('favorite_book',favoriteBook)
    formData.append('bio',bio)
    formData.append('current_vote',0)
    formData.append('group_name',groupName)
    formData.append('admin',true)
    if (profileImage){formData.append('profile_image',profileImage)}
    setIsLoading(true);
    fetch("/google-signup", {
      method: "POST",
      body: formData,
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((res) => onLogin(res));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }



  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    const formData= new FormData()
    formData.append('name',name)
    formData.append('email',email)
    formData.append('password',password)
    formData.append('password_confirmation',passwordConfirmation)
    formData.append('favorite_book',favoriteBook)
    formData.append('bio',bio)
    formData.append('current_vote',0)
    formData.append('group_name',groupName)
    formData.append('admin',false)
    if (profileImage){formData.append('profile_image',profileImage)}
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      body: formData,
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (<div className="loginScreen">
    <h1>Signup</h1>

    <form onSubmit={googleWasUsed ? handleGoogleSubmit : handleSubmit} className="loginForm">
    <input
          type="text"
          id="name"
          autoComplete="off"
          placeholder="Club Name"
          className="signupOption"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <input
          type="text"
          id="name"
          autoComplete="off"
          placeholder="Name"
          className="signupOption"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
           <input
          type="text"
          id="email"
          autoComplete="off"
          placeholder="Email"
          className="signupOption"
          value={email}
          disabled = {googleWasUsed ? true : false}
          onChange={googleWasUsed ? null : (e) => setEmail((e.target.value).toLowerCase())}
        />
          {googleWasUsed ? null :
          <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="signupOption"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          
          <input
            type="password"
            id="password_confirmation"
            placeholder="Confirm Password"
            className="signupOption"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
          </div>}
        <input
          type="text"
          id="favoriteBook"
          placeholder="FavoriteBook"
          className="signupOption"
          autoComplete="off"
          value={favoriteBook}
          onChange={(e) => setFavoriteBook(e.target.value)}
        />
        <textarea
          rows="3"
          id="bio"
          placeholder="Bio"
          className="signupOption"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <br/>
        <br/>
        <label htmlFor="profileImage" className={fileLoaded ? "labelForLoadedFile" :"labelForFile"}>
          Profile Image
        </label>
        <input
          type="file"
          title=" "
          id="profileImage"
          accept="image/*"
          style={{visibility:"hidden"}} 
          className="custom-file-input"
          onChange={loadedFile}
        />
        <br/>
        <button type="submit" className="signupButton">{isLoading ? "Loading..." : "Sign Up"}</button>
        {errors.map((err) => (
          <h4 className="error" key={err}>{err}</h4>
        ))}
    </form>
          <br/>
    {googleWasUsed ? null :
      <GoogleLogin
        clientId = {clientId}
        buttonText = "Signup with Google"
        cookiePolicy = {"single_host_origin"}
        onSuccess = {onSuccess}
        />
    }
    </div>
  )
}

export default Signup;
