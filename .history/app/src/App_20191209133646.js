import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import MyTeam from "./components/dashboard/MyTeam";
import MyClient from "./components/dashboard/MyClient";
import Marketing from "./components/dashboard/Marketing";
import Settings from "./components/dashboard/Settings";
import Index from "./components/public/Index";
import Home from "./components/layout/Home";
import SignedOutLinks from "./components/layout/SignedOutLinks";
import Navbar_signedout from "./components/layout/Navbar_signedout";

// import  './App.css';

class App extends React.Component {
  console.log(props.location)
  
}

// function App_2() {
//   return (

//   );
// }

export default App;
