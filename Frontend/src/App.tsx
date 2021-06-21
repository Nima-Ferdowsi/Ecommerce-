import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import Home from './Layouts/Home';
import Search from './Layouts/Search';
import Login from './Layouts/Login';
import Signup from "./Layouts/SignUp";
import { ToastContainer } from 'react-toastify';
import AddProduct from './components/addProduct';
import Cart from "./Layouts/Cart";


const App: React.FC = () => {
  return (
    <Fragment>
     <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/search' component={Search} /> 
    <Route exact path='/login' component={Login} /> 
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/cart' component={Cart} /> 
 
    <Route exact path='/admin/product/create' component={AddProduct} /> 

     </Switch>
     <ToastContainer/>

    </Fragment>
  );
};

export default App;
