import React from 'react';
import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from './pages/login';
import Dashboard from './pages/admin/dashboard';
import AddSchool from './pages/admin/addschool';
import ViewSchool from './pages/admin/viewschool';
import SchoolDash from './pages/school/schooldash';
import EmployeeReg from './pages/school/employeereg';
import AddStudent from './pages/school/addstudent';
import ViewEmployeeReg from './pages/school/viewemployee';
import ViewStudents from './pages/school/viewstudents';
import Logout from './pages/logout';
import AddClass from './pages/school/addclass';
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
           <Route path='/logout' exact component={Logout} />

           <Route path='/admin/dashboard/' exact component ={Dashboard} />
           <Route path='/admin/addschool/' exact component ={AddSchool} />
           <Route path='/admin/viewschool/' exact component ={ViewSchool} />
           
           <Route path='/school/schooldash/' exact component ={SchoolDash} />
           <Route path='/school/employeereg/' exact component ={EmployeeReg} />
           <Route path='/school/addstudent/' exact component ={AddStudent} />
           <Route path='/school/viewemployee/' exact component ={ViewEmployeeReg}/>
           <Route path='/school/viewstudents/' exact component ={ViewStudents} />
           <Route path='/school/addclass/' exact component ={AddClass} />
        </Router>
    );
}


export default App;
