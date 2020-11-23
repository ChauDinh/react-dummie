import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { FetchRandomUser } from "./components/API/FetchRandomUser";
import { User } from "./components/User/User";
import { Users } from "./components/Users/Users";
import { UserPagination } from "./components/Pagination/UserPagination";

function App() {
  return (
    <div className="App">
      <h1>Hello from React.JS coding interview</h1>
      <p>The CSS of this project is not responsive yet 🐷</p>
      <Counter />
      <FetchRandomUser />
      <User />
      <Users />
      <UserPagination />
    </div>
  );
}

export default App;
