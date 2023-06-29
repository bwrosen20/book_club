import React, { useState } from "react";

function Signup({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [favoriteBook,setFavoriteBook]=useState("")
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        password_confirmation: passwordConfirmation,
        image_url: imageUrl,
        favorite_book:favoriteBook,
        bio,
        current_vote:0
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="signupScreen">
        <input
          type="text"
          id="name"
          autoComplete="off"
          placeholder="Name"
          className="signupOption"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
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
        <input
          type="text"
          id="imageUrl"
          placeholder="Profile Image"
          className="signupOption"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input
          type="text"
          id="favoriteBook"
          placeholder="FavoriteBook"
          className="signupOption"
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
        <button type="submit" className="signupButton">{isLoading ? "Loading..." : "Sign Up"}</button>
        {errors.map((err) => (
          <h4 key={err}>{err}</h4>
        ))}
    </form>
  );
}

export default Signup;
