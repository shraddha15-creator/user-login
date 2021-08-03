import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import RegistrationForm from './components/registration/RegistrationForm';

function App() {
  return (
    <div className="App">
    <Switch>
      < Route exact path="/" component={HomePage} />
      < Route exact path="/register" component={RegistrationForm} />
    </Switch>
      {/* <RegistrationForm />
      <HomePage /> */}
    </div>
  );
}

export default App;
