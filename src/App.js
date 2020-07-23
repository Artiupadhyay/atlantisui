import React from 'react';
import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from './pages/login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
    return (
        
        
        
        <Router>
            <Route path='/' exact component={Login} />
        </Router>
    
    );
}


export default App;
