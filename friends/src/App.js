// SECTION LIBRARY IMPORTS
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";

//SECTION COMPONENT IMPORTS
import Nav from "./components/Nav";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

// SECTION COMPONENT
function App() {
  return (
    <Router>
      <Route path="/" component={Nav} />
      <Route path="/" component={Login} />
      <Route path="/friends_list" component={FriendsList} />
    </Router>
  );
}

export default App;
