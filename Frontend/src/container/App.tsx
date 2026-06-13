import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import { ToastContainer } from "react-toastify";
import AddProduct from "../components/addProduct";
import Cart from "../pages/Cart";
import ProductPage from "../pages/ProductPage";
import Dashboard from "../pages/Admin/Dashboard";
import Mainlayout from "../Layouts/MainLayout";

const App: React.FC = () => {
  return (
    <Fragment> 
      <Switch>  
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        <Route exact path="/admin/product/create" component={AddProduct} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route path={["/"]}> 
          <Mainlayout>
            <Route exact path="/" component={Home} />
            <Route  path="/search" component={Search} />
            <Route  path="/cart" component={Cart} />
            <Route  path="/product/:id" component={ProductPage} />
          </Mainlayout>
        </Route>
      </Switch>
      <ToastContainer />
    </Fragment>
  );
};

export default App;
