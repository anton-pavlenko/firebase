import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './layout/Home';


const app = App_2 => {
    return (
        <BrowserRouter>
        
        <div className="App">
      
      
      
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
        
        </BrowserRouter>
    )
}