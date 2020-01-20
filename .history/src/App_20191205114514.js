import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import 
import Index from './components/public/Index'



// import  './App.css';

function App() {
  return (
    <BrowserRouter>
     
      <div className="App">
      
       
      <Navbar />
       <Switch>
         <Route path='/' exact component= { Index } />
         <Route path='/patern/dashboard' component={ Dashboard } />
       
       </Switch>
       

      </div>
      
    </BrowserRouter>
  );
}

export default App;
