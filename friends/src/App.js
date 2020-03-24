import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./components/Login";

// SECTION COMPONENT
function App() {
  return (
    <Router>
      <Route path="/" component={Nav} />
      <Route path="/" component={Login} />
    </Router>
  );
}

export default App;
