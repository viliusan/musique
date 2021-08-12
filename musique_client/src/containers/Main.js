import React from "react";
import { Switch, Router, withRouter, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";

const Main = (props) => {
  const { authUser } = props;
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={(props) => <Homepage {...props} />} />
        <Route
          exact
          path="/signin"
          render={(props) => {
            return (
              <AuthForm
                onAuth={authUser}
                buttonText="Log In"
                heading="Welcome Back."
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/signup"
          render={(props) => {
            return (
              <AuthForm
                onAuth={authUser}
                signUp
                buttonText="Sign Up"
                heading="We're happy to see you join."
                {...props}
              />
            );
          }}
        />
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default withRouter(connect(mapStateToProps, { authUser })(Main));
