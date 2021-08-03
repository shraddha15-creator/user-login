import React from 'react'
import '../homepage/homePage.css'

const HomePage = ({ setRegisteredUser }) => {
    return (
        <div className="homepage">
           <h1>hello from homepage</h1>
           <button className="button" onClick={() => setRegisteredUser({})}>Logout</button>
        </div>
    )
}

export default HomePage
