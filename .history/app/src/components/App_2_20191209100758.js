import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './layout/Home';
import SignedOutLinks from './components/layout/SignedOutLinks';
import Navbar_signedout from './layout/Navbar_signedout';


function App(){
    return (
        <BrowserRouter>
        
        <div className="App">
      
      
        <Navbar_signedout />
       <Switch>

         
         <Route path='Homehome'  component = { Home } />
         <Route path = '/partner/login' component = { SignedOutLinks } />
         

       </Switch>
      </div>
      
    </BrowserRouter>
        
        
    )
}

export default App