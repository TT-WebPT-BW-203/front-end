import "./App.css";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import { Route } from "react-router-dom";
import SignUp from "./components/Signup";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/login" render={() => <Login />} />
      <Route path="/register" render={() => <SignUp />} />
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </div>
  );
}

export default App;
