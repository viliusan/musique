import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
  <div class="home-hero">
    <h1>What are you listening to?</h1>
    <h4>New to Musique?</h4>
    <Link to="/signup" className="btn btn-primary">
      Sign up here
    </Link>
  </div>
);

export default Homepage;
