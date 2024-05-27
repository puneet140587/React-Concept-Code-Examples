import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const Home = () => <div> Home page </div>;
const About = () => <div> About page </div>;
const Contact = () => <div> Contact page </div>;

function RouterExample() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />
      </Routes>
    </Router>
  );
}

export default RouterExample;
