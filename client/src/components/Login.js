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
        <input
          type="password"
          id="password"
          placeholder="Password"
          autoComplete="current-password"
          className="loginOption"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
            <button variant="fill" color="primary" type="submit" className="loginButton">
          {isLoading ? "Loading..." : "Login"}
        </button>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
    </form>}
    <button className="loginButton" onClick={()=>setShowSignup(!showSignup)}>{showSignup ? "Back to Login" : "Signup"}</button>
    </div>
  );
}

export default Login