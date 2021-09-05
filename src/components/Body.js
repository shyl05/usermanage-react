import React, { useState } from "react";
import axios from 'axios';

const Body = () => {
  const [user, setUser] = useState({
    fist_name: "",
    last_name: "",
    username: "",
    email: "", 
    pwd: "", 
  });

  const { fist_name, last_name, username, email , pwd } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://3.6.93.159:7883/machstatz/add_new_user",user, {
      method : "POST",
      headers : {
        'Content-type': 'application/json',
        'mode' : 'no-cors',
        'Access-Control-Allow-Origin' : 'true',
        'Access-Control-Allow-Headers' : 'true'
      },
      body : JSON.stringify(user),
      crossorigin : true
    })
    .then(
       console.log(user)
      )
  };
  return (
    <div className="container">
        <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add User</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="First Name"
                    name="fist_name"
                    value={fist_name}
                    onChange={e => onInputChange(e)}
                    />
                </div>
                <div className = "form-group">
                    <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Last Name"
                    name="last_name"
                    value={last_name}
                    onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Username"
                    name="username"
                    value={username}
                    onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="E-mail Address"
                    name="email"
                    value={email}
                    onChange={e => onInputChange(e)}
                    required
                    />
                </div>
                <div>
                    <input type="text"
                    className="form-control form-control-lg"
                    placeholder="password"
                    name="pwd"
                    value={pwd}
                    onChange={e => onInputChange(e)}
                    required
                    />
                </div>
                <button type = "submit" onClick={e => onSubmit(e)} className="btn btn-primary btn-block">Add User</button>
            </form>
        </div>
    </div>
  );
};

export default Body;