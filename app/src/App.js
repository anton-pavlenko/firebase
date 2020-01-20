import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route,Redirect } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import MyTeam from "./components/dashboard/MyTeam";
import MyClient from "./components/dashboard/MyClient";
import Marketing from "./components/dashboard/Marketing";
import Settings from "./components/dashboard/Settings";
// import Index from "./components/public/Index";
import Home from './components/layout/Home';
// import Home_nav from './components/layout/Home_nav'; 
// import Navbar_signedout from './components/layout/Navbar_signedout';
import Admin_Dashboard from './components/dashboard/Admin_Dashboard';
import SignedOutLinks from "./components/layout/SignedOutLinks";
//REDUX
import { Provider } from 'react-redux'
import store from './components/redux/store'
import jwtDecode from 'jwt-decode'
// const ROOT_URL = 'http://localhost:5001/flyclever-cd51a/us-central1/app/';
// export { ROOT_URL };

// import  './App.css';

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100) // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100) // fake async
//   }
// }


let authenticated;
const token = localStorage.FBIdToken
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    authenticated = false;
    window.location.href = '/login'
  } else {
    authenticated = true;
  }
}

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="App">
        <Navbar />
        <Switch>
          <Route path="/partner/dashboard" component={Dashboard} />
          <Route path="/partner/myteam" component={MyTeam} />
          <Route path="/partner/myclient" component={MyClient} />
          <Route path="/partner/marketing" component={Marketing} />
          <Route path="/partner/settings" component={Settings} />
          <Route path= "/partner/admindashboard" component={Admin_Dashboard} />
        </Switch>


          {/* <Navbar_signedout /> */}
           <Switch>           
              <Route path="/partner/login" component={ SignedOutLinks } />
            </Switch>

            
            <Switch>
              <Route path="/Home" component={ Home } />
            </Switch>
      </div>
   </Provider>
   </BrowserRouter>
    
     

    

  );
}

export default App