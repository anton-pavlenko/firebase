import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import MyTeam from './components/dashboard/MyTeam';
import MyClient from './components/dashboard/MyClient';
import Marketing from './components/dashboard/Marketing';
import Index from './components/public/Index';



// import  './App.css';

function App() {
  return (
    <BrowserRouter>
     
      <div className="App">
      
       
      <Navbar />
       <Switch>
         <Route path='/' exact component= { Index } />
         <Route path='/patern/dashboard' component={ Dashboard } />
         <Route path='/myteam' component={ MyTeam } />
         <Route path='/patern/myclient' component={MyClient} />
         <Route path='/patern/marketing' component={Marketing} />
       </Switch>
       

      </div>
      
    </BrowserRouter>
  );
}

export default App;
