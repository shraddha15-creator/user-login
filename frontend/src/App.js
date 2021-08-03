import './App.css';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import RegistrationForm from './components/registration/RegistrationForm';

function App() {

  const [ user, setRegisteredUser ] = useState({})

  return (
    <div className="App">
    <Switch>
      <Route exact path="/" >
        {
          user && user._id ? <HomePage setRegisteredUser={setRegisteredUser} /> : <RegistrationForm setRegisteredUser={setRegisteredUser} />
        }
      </Route>
      <Route exact path="/register" >
        <RegistrationForm setRegisteredUser={setRegisteredUser} />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
