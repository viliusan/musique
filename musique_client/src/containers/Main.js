import React from "react";
import { Switch, Router, withRouter, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";

const Main = (props) => {
  const { authUser, errors, removeError, currentUser } = props;
  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Homepage currentUser={currentUser} {...props} />}
        />
        <Route
          exact
          path="/signin"
          render={(props) => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
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
                removeError={removeError}
                errors={errors}
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUserReducer,
    errors: state.errorReducer,
  };
};

export default withRouter(
  connect(mapStateToProps, { authUser, removeError })(Main)
);
