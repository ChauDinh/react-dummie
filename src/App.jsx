import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { FetchRandomUser } from "./components/API/FetchRandomUser";
import { User } from "./components/User/User";
import { Users } from "./components/Users/Users";
import { UserPagination } from "./components/Pagination/UserPagination";
import { NavBar } from "./components/NavBar/NavBar";
import { Login } from "./components/Login/Login";
import Register from "./components/Register/Register";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact={true}>
            <Counter />
            <FetchRandomUser />
            <User />
            <Users />
            <UserPagination />
          </Route>
          <Route path="/login" exact={true}>
            <Login />
          </Route>
          <Route path="/register" exact={true}>
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
