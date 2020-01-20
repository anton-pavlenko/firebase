import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './layout/Home';


const app = App_2 => {
    return (
        <BrowserRouter>
        
        <div className="App">
      
      
      
       <Switch>

         
         <Route path='/'  component = { Home }
         

       </Switch>
      </div>
      
    </BrowserRouter>
        
        </BrowserRouter>
    )
}