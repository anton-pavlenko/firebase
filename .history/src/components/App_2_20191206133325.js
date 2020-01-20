import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './layout/Home';
import SignedOutLinks from './components/layout/SignedOutLinks';


function App(){
    return (
        <BrowserRouter>
        
        <div className="App">
      
      
      
       <Switch>

         
         <Route path='/home'  component = { Home } />
         <Route path = '/partner/login' component = { SignedOutLinks } />
         

       </Switch>
      </div>
      
    </BrowserRouter>
        
        
    )
}

export default App