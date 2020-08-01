import React from 'react';
import {Redirect} from 'react-router-dom';
import SchoolNav from './components/schoolnav';
import configs  from './../config';
import AddEmployeeAttendanceCard from './components/addemployeeattendancecard';

var status1 = ''
var status2 = ''
    

class AddEmployeeAttendance extends React.Component {
  
  constructor() {
    super();
    this.state = {
       employees:null
    };
    
}



componentDidMount = ()=>{
  fetch(configs.baseurl+'school/employee',{
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
         this.setState({employees:data});
      }
  })
}


render(){
  if(localStorage.getItem('role')!=='School' && ! this.state.redirect){
    localStorage.removeItem('token');
    localStorage.removeItem('image');
    localStorage.removeItem('role');
    this.setState({redrect:true});
  }


    return(<>
      <Container-Fluid>
        {this.state.redirect ? <Redirect to = '/' />:null}
        <SchoolNav/>
        {this.state.employees ? 
        <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-5">
          {this.state.error?<div className="alert alert-danger" role="alert">{this.state.message}</div> :(this.state.success ? <div className="alert alert-primary" role="alert">{this.state.message}</div>:null)}
          <div className="border-primary d-flex flex-column mt-5">
              {this.state.employees.map((employeeinfo,index)=><AddEmployeeAttendanceCard employeeinfo={employeeinfo} key={index}/>
              )}
              <div className="row mt-4">
                <button className="sm-ml-5 col-5 mr-2 form-control btn btn-primary" >Submit</button>
                <button className="sm-ml-2 col-5 form-control btn btn-danger" >Cancel</button>
              </div>
          </div>
        </div>:<>Kindly Add some employees</>}
      </Container-Fluid>
      </>
    );
}
}
export default AddEmployeeAttendance;
           