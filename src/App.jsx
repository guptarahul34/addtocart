import React from 'react'
import Header from './Header';
import Menu from './Menu';
import { Switch,Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';

const App = () => {
    return (
        <>
         
         <Switch>
            <Route exact path="/" component={Header}/>
            <CartProvider>
              <Route exact path="/menu" component={Menu}/>
            </CartProvider>
            
        </Switch>
        
        </>
    )
}

export default App;
