import React, {useState} from 'react'
import {GoogleLogin} from 'react-google-login'

function Login({onLogin}){

    const clientId = "213321703015-mrd4guaeltrl0iq0chmk79iec74ld518.apps.googleusercontent.com"
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

  function onSuccess(res){
    setIsLoading(true);
    const loginMail = res.profileObj.email
    fetch("/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ loginMail}),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((data) => onLogin(data));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function onFailure(res){
    console.log("Failure")
    console.log(res)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((data) => onLogin(data));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function togglePassword(){

    const password = document.querySelector('#id_password')

    const type = password.getAttribute('type')=== 'password' ? 'text' : 'password'

    password.setAttribute('type',type)
  }

  return (<div className="loginScreen">
        <h1>Login</h1>
    <form onSubmit={handleSubmit} className="loginForm">
        <input
          type="text"
          id="email"
          placeholder="Email"
          autoComplete="off"
          className="signupOption"
          value={email}
          onChange={(e) => setEmail((e.target.value).toLowerCase())}
        />
        <div className="passwordOption">
        <input
          type="password"
          id="id_password"
          name="password"
          placeholder="Password"
          className="signupOption"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <i
          className="far fa-eye"
          id="togglePassword"
          onClick={togglePassword}
        />
        </div>
            <button className="loginButton">
          {isLoading ? "Loading..." : "Login"}
        </button>
        {errors.map((err) => (
          <h4 className="error" key={err}>{err}</h4>
        ))}
    </form>
          <br/>
    <GoogleLogin
        clientId = {clientId}
        buttonText = "Login with Google"
        cookiePolicy = {"single_host_origin"}
        onSuccess = {onSuccess}
        onFailure = {onFailure}
    />
    </div>
  );
}

export default Login