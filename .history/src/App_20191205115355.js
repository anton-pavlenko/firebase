import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import MyTeam from './components/dashboard/My';
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
         <Route path='/patern/myclients' component={ MyClient } />
       
       </Switch>
       

      </div>
      
    </BrowserRouter>
  );
}

export default App;
