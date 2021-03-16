import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from './components/Products'
import ProductDetails from './components/ProductDetails'
import CartItems from "./components/CartItems";


const Routes = () => {
 
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/productDetails/:id" exact component={ProductDetails} />
          <Route path="/cart" exact component={CartItems} />
        </Switch>
        </BrowserRouter>
    )
}
export default Routes;
