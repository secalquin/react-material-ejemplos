import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login-example">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
