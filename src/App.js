import React from 'react';
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
import AddVideo  from './pages/school/addvideo';
import ViewVideos from './pages/school/viewvideos';
import AddEmployeeAttendance from './pages/school/addemployeeattendance';
import ViewEmployeeAttendance from './pages/school/viewemployeeattendance';
import ViewStudentAttendance from './pages/school/viewstudentattendance';
import AddTimeTable from './pages/school/addtimetable';
import ViewTimeTable from './pages/school/viewtimetable';
import AddTest from './pages/school/addtest';
import ViewTests from './pages/school/viewtests';
import TestViewForQuestion from './pages/school/testviewforquestions';

import EmployeeDashBoard from './pages/employee/employeedashboard';
import EmployeAddStudent from './pages/employee/employeeaddstudent';
import ViewStudent from './pages/employee/viewstudent';
import AddEmployeeSubject from './pages/employee/addemployeesubjects';
import ViewEmployeeSubject from './pages/employee/viewemployeesubject';
import AddStudentAttendance from './pages/employee/addstudentsattendance';
import ViewStudentAttendances from './pages/employee/viewstudentsattendances';
import AddHomework from './pages/employee/addhomework';
import ViewHomework from './pages/employee/viewhomework';
import AddEmployeeVideo from './pages/employee/addemployeevideo';
import ViewEmployeeVideo from './pages/employee/viewemployeevideo';
import EmployeeProfile from './pages/employee/profile';

import StudentDashboard from './pages/student/studentdashboard';
import StudentAttendance from './pages/student/studentattendance';
import ViewStudentHomework from './pages/student/viewstudenthomework';
import ViewTutorial from './pages/student/viewtutorial';
import StudentProfile from './pages/student/studentprofile';


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
           <Route path='/school/add/tutorial' exact component ={AddVideo} />
           <Route path='/school/view/tutorial' exact component ={ViewVideos} />
           <Route path='/school/add/employee/attendance' exact component ={AddEmployeeAttendance} />
           <Route path='/school/view/employee/attendance' exact component ={ViewEmployeeAttendance} />
           <Route path='/school/view/student/attendance' exact component={ViewStudentAttendance} />
           <Route path='/school/add/timetable' exact component={AddTimeTable} />
           <Route path='/school/view/timetable' exact component={ViewTimeTable} />
           <Route path='/school/add/test' exact component={AddTest} />
           <Route path='/school/view/test' exact component={ViewTests} />
           <Route path='/school/test/question' exact component={TestViewForQuestion} />
           {/* School Route end here */}
           {/* Employee route start */}
           <Route path='/employee/employeedashboard' exact component={EmployeeDashBoard} />
           <Route path='/employee/add/student' exact component={EmployeAddStudent} />
           <Route path='/employee/view/student' exact component={ViewStudent} />
           <Route path='/employee/add/student/attendance' exact component={AddStudentAttendance} />
           <Route path='/employee/view/student/attendance' exact component={ViewStudentAttendances} />
           <Route path='/employee/add/subject' exact component={AddEmployeeSubject} />
           <Route path='/employee/view/subjects' exact component={ViewEmployeeSubject} />
           <Route path='/employee/add/tutorial' exact component={AddEmployeeVideo} />
           <Route path='/employee/view/tutorial' exact component={ViewEmployeeVideo} />
           <Route path='/employee/add/homework' exact component={AddHomework} />
           <Route path='/employee/view/homework' exact component={ViewHomework} />
           <Route path='/employee/profile' exact component={EmployeeProfile} />
           {/* Employee Route End */}
           {/* Student Route Start */}
           <Route path='/student/dashboard' exact component = {StudentDashboard}/>
           <Route path='/student/view/homework' exact component = {ViewStudentHomework} />
           <Route path='/student/view/tutorial' exact component = {ViewTutorial} />
           <Route path='/student/view/attendance' exact component = {StudentAttendance} />
           <Route path='/student/view/profile' exact component = {StudentProfile} />
           {/* Student Route End */}
        </Router>
    );
}


export default App;
