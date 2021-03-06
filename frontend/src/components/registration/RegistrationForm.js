import React, { useState } from "react";
import "../registration/registration.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import imgUpload from "../../assets/img-upload.jpg";

const RegistrationForm = (props) => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    userName: "",
    zipcode: "",
    email: "",
    password: "",
    reEnterPassword: "",
    profilePhoto: "",
  });

  const [selectedImg, setSelectedImg] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleImgInput = (e) => {
    const inputFile = e.target.files[0]
    const imageFormData = new FormData();
    imageFormData.append("profilePic", inputFile);
    setSelectedImg(URL.createObjectURL(inputFile));

    axios.post("http://localhost:9002/upload/profilePic", imageFormData).then((res) => {
      setUser({...user, profilePhoto: res.data.data._id})
    });
  };

  const register = () => {
    const { name, userName, email, zipcode, password, reEnterPassword, profilePhoto } = user;
    if (
      (name && userName && email && zipcode &&
      password && password === reEnterPassword)
    ) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        props.setRegisteredUser(user);
        history.push("/");
      });
    } else {
      alert("Please fill all the fileds first");
    }
  };

  return (
    <div className="register">
      <h1>Registration Form</h1>

      <div class="profile-pic">
        <label class="-label" for="file">
          <span class="glyphicon glyphicon-camera"> </span>
          <img src={selectedImg} placeholder={imgUpload} id="imgUpload" width="170" height="170"/>
        </label>
      </div>
      <input id="file" type="file"  onChange={handleImgInput} />

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
        type="number"
        name="zipcode"
        value={user.zipcode}
        placeholder="Enter Zipcode"
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
