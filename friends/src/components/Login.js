import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChanges = (event) => {
    // console.log(event);
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
    // console.log(credentials);
  };

  const login = () => {};

  return (
    <form onSubmit={null}>
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
