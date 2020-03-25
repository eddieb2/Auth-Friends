import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Nav = (props) => {
  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friends_list">Friends List</Link>
        </li>
      </ul>
      <Button
        color="secondary"
        variant="contained"
        onClick={logout}
      >
        Logout
      </Button>
    </nav>
  );
};

export default Nav;
