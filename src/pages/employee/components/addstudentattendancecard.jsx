import React from 'react';
import {Redirect} from 'react-router-dom';
import config from './../../config';
var status = ''
    

class AddStudentAttendanceCard extends React.Component {
  
  constructor() {
    super();
    this.state = {
      
    };
    
}

setAttendance=(studentid, attendancestatus)=>{
    console.log(studentid+" "+attendancestatus +" "+new Date().toLocaleDateString());
    fetch(config.baseurl+'attendance/student',{
        method:'post',
        headers:{
            'Content-Type':'application/json',
            'auth':localStorage.getItem('token')
        },
        body:JSON.stringify({id:studentid,date:new Date().toISOString().split('T')[0], status:attendancestatus})
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
              <div className="row mt-4 ">
                <span className="col-5">{this.props.studentinfo.name}</span>
                <select className="sm-ml-5 col-7 form-control" onChange={(evenet)=>this.setAttendance(this.props.studentinfo.id,evenet.target.value)} >
                    <option value="-">-</option>
                    <option value="P">P</option>
                    <option value="A">A</option>
                </select>
              </div>
            );
}
}
export default AddStudentAttendanceCard;
           