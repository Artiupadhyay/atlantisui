import React from 'react';
import {Redirect} from 'react-router-dom';
import EmployeeNavbar from './components/employeenavbar';
import configs  from './../config';
import AddStudentAttendanceCard from './components/addstudentattendancecard';

var status1 = ''
    

class AddStudentsAttendance extends React.Component {
  
  constructor() {
    super();
    this.state = {
       employees:null
    };
    
}



componentDidMount = ()=>{
  fetch(configs.baseurl+'employee/student',{
      method:'get',
      headers:{
          'auth':localStorage.getItem('token')
      }
  }).then(res=>{
      status1 = res.status
      return res.json()
  })
  .then(data=>{
      if(status1 === 200 || status1 === 201){
         this.setState({students:data});
      }
  })
}


render(){
 
  if((localStorage.getItem('role')!=='Teacher' || localStorage.getItem('role')!=='Reception' || localStorage.getItem('role')!=='Accountant')  && ! this.state.redirect){
    localStorage.removeItem('token');
    localStorage.removeItem('image');
    localStorage.removeItem('role');
    this.setState({redrect:true});
 }


    return(<>
      <Container-Fluid>
        {this.state.redirect ? <Redirect to = '/' />:null}
        <EmployeeNavbar/>
         
        <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-5">
          {this.state.error?<div className="alert alert-danger" role="alert">{this.state.message}</div> :(this.state.success ? <div className="alert alert-primary" role="alert">{this.state.message}</div>:null)}
          <div className="border-primary d-flex flex-column mt-5">
              {this.state.students? this.state.students.map((studentinfo,index)=><AddStudentAttendanceCard studentinfo={studentinfo} key={index}/>
              ):null}
              
          </div>
        </div>
      </Container-Fluid>
      </>
    );
}
}
export default AddStudentsAttendance;
           