import React, {useState} from 'react'
import Signup from './Signup'

function Login({onLogin}){

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showSignup, setShowSignup]=useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
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
        <div><h1>Welcome To Brian's Book Club!</h1></div>
    {showSignup ?
    <Signup onLogin={onLogin}/>:
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Name"
          autoComplete="off"
          className="loginOption"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="loginForm">
        <input
          type="password"
          id="id_password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          className="passwordOption"
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
          <h4 key={err}>{err}</h4>
        ))}
    </form>}
    <button className="loginButton" onClick={()=>setShowSignup(!showSignup)}>{showSignup ? "Back to Login" : "Signup"}</button>
    </div>
  );
}

export default Login