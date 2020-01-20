import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './layout/Home';
import SignedOutLinks from './components/layout/SignedOutLinks';


const app = App_2 => {
    return (
        <BrowserRouter>
        
        <div className="App">
      
      
      
       <Switch>

         
         <Route path='/home'  component = { Home } />
         <Route path = '/signedout' component = { SignedOutLinks } />
         

       </Switch>
      </div>
      
    </BrowserRouter>
        
        
    )
}

export default app