import "./App.css";
import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import RegistrationForm from "./components/registration/RegistrationForm";


function App() {
  const [user, setRegisteredUser] = useState({});

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {user && user.name ? (
            <HomePage setRegisteredUser={setRegisteredUser} />
          ) : (
            <Redirect to="/register" />
          )}
        </Route>
        <Route exact path="/register">
          <RegistrationForm setRegisteredUser={setRegisteredUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
