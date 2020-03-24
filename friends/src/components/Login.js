import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  // SECTION 1.) State set up as an object with username and password keys as required by the server.
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  // SECTION 3.) Handles the changes from our inputs and sets it to state.
  const handleChanges = (event) => {
    // console.log(event);
    // NOTE This sets our state appropriately.
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
    // console.log(credentials);
  };

  // SECTION 4.) Create login function that sends a post request to the server and sets the returned token to local storage, if proper password is entered.
  const login = (event) => {
    event.preventDefault();

    // NOTE Sends a post to the server with the credentials.
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((response) => {
        // NOTE This is the response coming back from the server.
        console.log("response", response);
        // NOTE Set token to local storage. The data can be seen by logging in and checking the console. The token is the value of response.data.payload.
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.payload)
        );
      });
  };

  // SECTION 2.) Login form accepts input for username and password. Our handleChanges function takes the values from the inputs and sets them to state. See section 3 for details.
  return (
    <form onSubmit={login}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={credentials.username}
        onChange={handleChanges}
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        value={credentials.password}
        onChange={handleChanges}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
