import React from 'react';
import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from './pages/login';
import Dashboard from './pages/admin/dashboard';
import AddSchool from './pages/admin/addschool';
import ViewSchool from './pages/admin/viewschool';
import SchoolDash from './pages/school/schooldash';
import EmployeeRegistration from './pages/school/employeeregistration';
import AddStudent from './pages/school/addstudent';
import ViewEmployee from './pages/school/viewemployee';
import ViewStudents from './pages/school/viewstudents';
import Logout from './pages/logout';
import AddClass from './pages/school/addclass';
import ViewClases from './pages/school/viewclasses';
import Profile from './pages/school/profile';
import AddSubject from './pages/school/addsubject';
import ViewSubjects from './pages/school/viewsubjects';

import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";

function App() {
    return (    
        <Router>
           <Route path='/' exact component={Login} />
           <Route path='/logout' exact component={Logout} />

           <Route path='/admin/dashboard' exact component ={Dashboard} />
           <Route path='/admin/addschool' exact component ={AddSchool} />
           <Route path='/admin/viewschool' exact component ={ViewSchool} />
           {/* School Route Start */}
           <Route path='/school/dashboard' exact component ={SchoolDash} />
           <Route path='/school/employee/registration' exact component ={EmployeeRegistration} />
           <Route path='/school/add/student' exact component ={AddStudent} />
           <Route path='/school/view/employee' exact component ={ViewEmployee}/>
           <Route path='/school/view/students' exact component ={ViewStudents} />
           <Route path='/school/add/class' exact component ={AddClass} />
           <Route path='/school/view/classes' exact component ={ViewClases} />
           <Route path='/school/profile' exact component ={Profile} />
           <Route path='/school/add/subject' exact component ={AddSubject} />
           <Route path='/school/view/subjects' exact component ={ViewSubjects} />

           {/* School Route End */}
        </Router>
    );
}


export default App;
