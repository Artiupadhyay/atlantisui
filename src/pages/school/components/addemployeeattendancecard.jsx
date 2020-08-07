import React from 'react';
import {Redirect} from 'react-router-dom';
import config from './../../config';
var status = ''
    

class AddEmployeeAttendanceCard extends React.Component {
  
  constructor() {
    super();
    this.state = {
      
    };
    
}

setAttendance=(employeeid, attendancestatus)=>{
    console.log(employeeid+" "+attendancestatus +" "+new Date().toLocaleDateString());
    fetch(config.baseurl+'attendance/employe',{
        method:'post',
        headers:{
            'Content-Type':'application/json',
            'auth':localStorage.getItem('token')
        },
        body:JSON.stringify({id:employeeid,date:new Date().toISOString().split('T')[0], status:attendancestatus})
    }).then(res=>{
        status =res.status;
        return res.json();
    })
    .then(data=>{
        console.log(data);
    })
}


render(){
    return(
              <div className="col-md-auto mt-4 d-flex">
                <span className="col-md-auto">{this.props.employeeinfo.name}</span>
                <select className="sm-ml-5 col-7 form-control" onChange={(evenet)=>this.setAttendance(this.props.employeeinfo.id,evenet.target.value)} >
                    <option value="-">-</option>
                    <option value="P">P</option>
                    <option value="A">A</option>
                </select>
              </div>
            );
}
}
export default AddEmployeeAttendanceCard;
           