import React, { useState } from "react";
import "../registration/registration.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import imgUpload from '../../assets/img-upload.jpg'

const RegistrationForm = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, userName, email, password, reEnterPassword } = user;
    if (name && userName && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        history.push("/homepage");
      });
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="register">
      {console.log("user", user)}
      <h1>Registration Form</h1>

      <div class="profile-pic">
        <label class="-label" for="file">
          <span class="glyphicon glyphicon-camera"> </span>
          <span>Change Image</span>
        </label>
        <input id="file" type="file" onchange="loadFile(event)" />
        <img
          src={imgUpload}
          id="imgUpload"
          width="50"
          height="50"
        />
      </div>

      {/* <label for="img">Choose Profile Photo</label>
            <input type="file" id="img" name="img" accept="image/*" />
            <input type="submit" /> */}
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter Your Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="userName"
        value={user.userName}
        placeholder="Enter userName"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter Your Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter Password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      />

      <div className="button" onClick={register}>
        Register
      </div>
    </div>
  );
};

export default RegistrationForm;
