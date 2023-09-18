import React, {useState} from 'react'

function Login({onLogin}){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

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
        <h1>Login</h1>
    <form onSubmit={handleSubmit} className="loginForm">
        <input
          type="text"
          id="email"
          placeholder="Email"
          autoComplete="off"
          className="signupOption"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
    </div>
  );
}

export default Login