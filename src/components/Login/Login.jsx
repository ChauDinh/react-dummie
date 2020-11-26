import React from "react";

import "./Login.style.css";

const initialLoginValues = {
  usernameEmail: "",
  password: "",
};

export const Login = () => {
  const [state, setState] = React.useState(initialLoginValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    window.location.replace("/");
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className="login__container">
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__field">
          <label className="login__label">Username or email</label>
          <input
            className="login__input"
            value={state.usernameEmail || ""}
            onChange={handleChange}
            name="usernameEmail"
            type="text"
          />
        </div>
        <div className="login__field">
          <label className="login__label">Password</label>
          <input
            className="login__input"
            value={state.password || ""}
            onChange={handleChange}
            name="password"
            type="password"
          />
        </div>
        <button className="login__btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
