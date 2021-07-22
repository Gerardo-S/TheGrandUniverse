import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ImageDetails from './pages/ImageDetails/ImageDetails';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import Nav from "./pages/Components/Nav/Nav"
function App() {
  return (
    <div >
      <Nav/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/apodImages" />
          </Route>
          <Route path="/apodImages">
            <HomePage />
          </Route>
          <Route path="/imageDetails">
            <ImageDetails />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
