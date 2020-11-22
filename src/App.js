import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { FetchRandomUser } from "./components/API/FetchRandomUser";
import { User } from "./components/User/User";
import { Users } from "./components/Users/Users";

function App() {
  return (
    <div className="App">
      <h1>Hello from React.JS coding interview</h1>
      <Counter />
      <FetchRandomUser />
      <User />
      <Users />
    </div>
  );
}

export default App;
