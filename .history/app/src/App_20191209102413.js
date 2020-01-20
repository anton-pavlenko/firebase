import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard.jsx';
import MyTeam from './components/dashboard/MyTeam';
import MyClient from './components/dashboard/MyClient';
import Marketing from './components/dashboard/Marketing';
import Settings from './components/dashboard/Settings';
import Index from './components/public/Index';



// import  './App.css';

function App() {
  return (
    <BrowserRouter>
     
      <div className="App">
      
      
      <Navbar />
       <Switch>
       
         <Route path='/' exact component= { Index } />
         <Route path='/partner/dashboard' component={ Dashboard } />
         <Route path='/partner/myteam' component={ MyTeam } />
         <Route path='/partner/myclient' component={ MyClient } />
         <Route path='/partner/marketing' component={ Marketing } />
         <Route path='/partner/settings' component={ Settings} />
         

         

       </Switch>
      </div>
      
    </BrowserRouter>
  );
}

export default App;


function App_2() {
  return (
    <BrowserRouter>
    
    <div className="App">
  
  
    <Navbar_signedout />
   <Switch>

     
     <Route path='/Home'  component = { Home } />
     <Route path = '/partner/login' component = { SignedOutLinks } />
     

   </Switch>
  </div>
  
</BrowserRouter>
    
    
)
}