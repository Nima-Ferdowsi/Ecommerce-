import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  changeEmail,
  changeFirst,
  changeLast,
  changePass,
  reset,
} from "../RX/action/user";
import SignUpBtn from "../utils/signup";

const Signup = () => {
  /* Refs */
  const emailRef = useRef(null);
  const firstRef = useRef(null);
  const lastRef = useRef(null);

  const dispatch = useDispatch();


  //show error

useEffect(()=>{
  //reset states when mounted
  dispatch(reset('first'))
  dispatch(reset('last'))
  dispatch(reset('pass'))
  dispatch(reset('email'))
},[])
  return (
    <div className="text-center mt-4">

      <Helmet>
        <title>Signup</title>
        <link rel="stylesheet" href="/css/Login.css" />
        
      </Helmet>
      <div className="form-signin">
     
        <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
        <label htmlFor="firstName" className="sr-only">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          className="form-control mb-2"
          placeholder="First Name"
          required
          
          onChange={(e) => {
           dispatch(changeFirst(e.target.value));
          }}
          ref={firstRef}
        />
        <label htmlFor="lastName" className="sr-only">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          className="form-control mb-2"
          placeholder="Last Name"
          required
          onChange={(e) => {
             dispatch(changeLast(e.target.value))
          }}
          ref={lastRef}
        />
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control mb-2"
          placeholder="Email address"
          required
          onChange={(e) => {
          dispatch(changeEmail(e.target.value));
          }}
          ref={emailRef}
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
          onChange={(e) => {
             dispatch(changePass(e.target.value));
          }}
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <SignUpBtn />
        <div>
          <Link to="/login" className="sign_login_link mt-3 text-danger">
            I Have An Account?
          </Link>
        </div>
        <p className="mt-3 mb-3 text-muted">&copy; 2020-2025</p>
      </div>
    </div>
  );
};

export default withRouter(Signup);