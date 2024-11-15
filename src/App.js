import "./App.css";
import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import About from "./Components/About";
import Category from "./Components/Category";
import Error from "./Components/Error";
import CategoryDescription from "./Components/CategoryDescription";

class App extends React.Component {
  render() {
    return (
      <>
        {/* <Header /> */}
        <Router>
          <nav>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/about">Main</Link>
            </li>
            <li>
              <Link to="/cat">Main</Link>
            </li>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/cat" component={Category} />
            <Route
              exact
              path="/cat/:userName"
              component={CategoryDescription}
            />
            <Route component={Error} />
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
