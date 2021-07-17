import React,{useEffect} from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { isFormValid } from "../utils/isFormValid";
import { useSelector, useDispatch } from 'react-redux';
import { changeEmail, changePass, reset } from "../RX/action/user";
import {server} from '../config/server.json'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withRouter } from 'react-router-dom';
import { RootState } from "../RX/store/RootState";
const Login:React.FC = (props:any) => {
  const dispatch=useDispatch()
  
  const email=useSelector((state:RootState)=>state.email)
  const pass=useSelector((state:RootState)=>state.pass)



const login=()=>{
  if(!email||!pass){
   toast.error("who are you ?! you have to fill the fields first  ")
  }
 else{
  fetch(`${server}/login`, {
    method: "Post",
    body: JSON.stringify({email,pass}),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'

    },    })
    .then((data) => data.json())
    .then((data) =>{
      if(data.status===200){
        toast.success('Welcome')
        localStorage.setItem('user',JSON.stringify(data))
        props.history.push('/')
      }
      if(data.status===404){
        toast.error('UserName or password are inccorect!')
      }
    }).catch(err=>toast.error('There is error from the server sorry!'));


 }
}

useEffect(()=>{

dispatch(reset('first'))
dispatch(reset('last'))
dispatch(reset('pass'))
dispatch(reset('email'))
},[])

  return (
    <div className='text-center'>
      <Helmet> 
        <title>Login</title>
        <link rel="stylesheet" href="/css/Login.css" />
      </Helmet>
      <div className="form-signin">
        
        <h1 className="h3 mb-3 font-weight-normal">Please Log in</h1>
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
        <button className="btn btn-lg btn-primary btn-block" disabled={!isFormValid([email,pass])} onClick={login}>
          Sign in
        </button>
     
          <Link to='/signup' className='sign_login_link mt-3 text-danger'>Dont Have AN Account?</Link>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
      </div>
    </div>
  );
};

export default withRouter(Login);