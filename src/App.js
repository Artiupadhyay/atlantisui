import React from 'react';
import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from './pages/login';
import Dashboard from './pages/admin/dashboard';
import AddSchool from './pages/admin/addschool';
import ViewSchool from './pages/admin/viewschool';
import SchoolDash from './pages/school/schooldash';
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
           <Route path='/admin/dashboard/' exact component ={Dashboard} />
           <Route path='/admin/addschool/' exact component ={AddSchool} />

           <Route path='/admin/viewschool/' exact component ={ViewSchool} />
           <Route path='/school/schooldash/' exact component ={SchoolDash} />
        </Router>
    );
}


export default App;
