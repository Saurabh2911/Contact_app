import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "./styles.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import ViewContact from "./components/ViewContact";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" >
          <Home />
          </Route>
        <Route exact path="/add">
         <AddContact />
        </Route>
        <Route exact path="/edit/:id">
          <EditContact />
        </Route>
      </Switch>
      <Switch>
      <Route exact path="/view/:id">
          <ViewContact />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
