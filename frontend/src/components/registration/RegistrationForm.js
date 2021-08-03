import React, { useState } from 'react'
import '../registration/registration.css';
import axios from 'axios';

const RegistrationForm = () => {

    const [user, setUser] = useState({
        name: "",
        userName: "",
        email: "",
        password: "",
        reEnterPassword: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register = () => {
        const { name, userName, email, password, reEnterPassword } = user
        if( name && userName && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then(res => console.log(res))
        }else{
            alert("invalid input")
        }
    }

    return (
        <div className="register">
            {console.log("user", user)}
            <h1>Registration Form</h1>
            <input type="text" name="name" value={user.name} placeholder="Enter Your Name" onChange={ handleChange }/>
            <input type="text" name="userName" value={user.userName} placeholder="Enter userName" onChange={ handleChange }/>
            <input type="text" name="email" value={user.email} placeholder="Enter Your Email" onChange={ handleChange }/>
            <input type="text" name="password" value={user.password} placeholder="Enter Password" onChange={ handleChange }/>
            <input type="text" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }/>
            <div className="button" onClick={register}>Register</div>
        </div>
    )
}

export default RegistrationForm;
