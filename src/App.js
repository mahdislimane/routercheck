import React from "react";
import { Route, Switch } from "react-router-dom";
import Category from "./component/Category";
import Products from "./component/Products";
import NavBar from "./component/Navbar";
import Home from "./component/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login";

export default function App(props) {
  return (
    <div>
      <Route path="routercheck/" component={NavBar} />
      <Switch>
        <Route exact path="routercheck/" component={Home} />
        <Route path="routercheck/category" component={Category} />
        <Route path="routercheck/products" component={Products} />
        <Route path="routercheck/login" component={Login} />
      </Switch>
    </div>
  );
}
