import React from 'react'
import '../homepage/homePage.css'

const HomePage = ({setRegisteredUser, history }) => {
    return (
        <div className="homepage">
           <h1>User created Successfully </h1>
           <button className="button" onClick={() => history.push('/register')}>Create Another</button>
        </div>
    )
}

export default HomePage
