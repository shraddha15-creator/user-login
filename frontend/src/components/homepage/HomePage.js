import React from 'react';
import { useHistory } from 'react-router-dom';
import '../homepage/homePage.css';

const HomePage = ({setRegisteredUser }) => {
    const history = useHistory();

    return (
        <div className="homepage">
           <h1>User created Successfully </h1>
           <button className="button" onClick={() => history.push('/register')}>Create Another</button>
        </div>
    )
}

export default HomePage
