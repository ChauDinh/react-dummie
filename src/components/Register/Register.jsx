import React from "react";
// import { Redirect } from "react-router-dom";

import "./Register.style.css";

const initialRegisterValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const Register = () => {
  const [state, setState] = React.useState(initialRegisterValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("STATE: ", state);
    window.location.replace("/login");
  };
  const handleChange = (e) => {
    const name = e.target.name;
    setState({
      ...state,
      [name]: e.target.value,
    });
  };
  return (
    <div className="register__container">
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__field">
          <label className="register__label">Username</label>
          <input
            className="register__input"
            onChange={handleChange}
            value={state.username}
            name="username"
            type="text"
          />
        </div>
        <div className="register__field">
          <label className="register__label">Email</label>
          <input
            className="register__input"
            onChange={handleChange}
            value={state.email}
            name="email"
            type="email"
          />
        </div>
        <div className="register__field">
          <label className="register__label">Password</label>
          <input
            className="register__input"
            onChange={handleChange}
            value={state.password}
            name="password"
            type="password"
          />
        </div>
        <div className="register__field">
          <label className="register__label">Confirm password</label>
          <input
            className="register__input"
            onChange={handleChange}
            value={state.confirmPassword}
            name="confirmPassword"
            type="password"
          />
        </div>
        <button className="register__btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
