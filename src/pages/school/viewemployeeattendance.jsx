import React from 'react';
import {Redirect} from 'react-router-dom';
import SchoolNav from './components/schoolnav';
import configs  from './../config';

var status1 = ''
var listDate = [];    

class ViewEmployeeAttendance extends React.Component {
  
  constructor() {
    super();
    this.state = {
       fromDate:null,
       toDate:null,
    };
    
}



getAttendance = ()=>{
  fetch(configs.baseurl+'attendance/employe',{
      method:'put',
      headers:{
          'auth':localStorage.getItem('token'),
          'Content-Type':'application/json'
      },
      body:JSON.stringify({fromDate:this.state.fromDate, toDate:this.state.toDate})
  }).then(res=>{
      status1 = res.status
      return res.json()
  })
  .then(data=>{
      if(status1 === 200 || status1 === 201){
         this.setState({attendanceData:data});
      }
      else{

      }
  })
}

getDateList=()=>{
    listDate = [];
    var startDate =this.state.fromDate;
    var endDate = this.state.toDate;
    var dateMove = new Date(startDate);
    var strDate = startDate;

    while (strDate < endDate){
    strDate = dateMove.toISOString().slice(0,10);
    listDate.push(strDate);
    dateMove.setDate(dateMove.getDate()+1);
    };
    return listDate;
}


render(){
            if(localStorage.getItem('role')!=='School' && ! this.state.redirect){
                localStorage.removeItem('token');
                localStorage.removeItem('image');
                localStorage.removeItem('role');
                this.setState({redirect:true});
            }

       
    return(<>
      <Container-Fluid>
        {this.state.redirect ? <Redirect to = '/' />:null}
        <SchoolNav/>
        <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-4">
            <div className="d-flex row mt-4 align-content-center">
                <span className="sm-ml-5 mr-2" >Show Employee Attendance</span>
            </div>
            <div className="row mt-4 ">
                <input type="date"  className="mr-2 col-4" onChange={(event)=>this.setState({fromDate:event.target.value})}/>
                <input type="date" className="mr-2 col-4" onChange={(event)=>this.setState({toDate:event.target.value})}/>
                <button className="sm-ml-5 col-3 mr-2 form-control btn btn-primary" onClick={this.getAttendance}>Show</button>
            </div>
            
        </div>
       {this.state.attendanceData? <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5">
            <div class="table-responsive">
                <table class="table table-sm table-bordered mt-3">
                <thead>
                    <tr>
                    <th scope="col">Employee Name</th>
                    {
                    this.getDateList().map((date,index)=>(<th scope="col">{date}</th>))
                    }
                    <th>Present And Absent Count</th>
                    </tr>
                </thead>
                <tbody>
                   {this.state.attendanceData.map((employeinfo,index)=>
                        (<tr>
                        <td>{employeinfo.name}</td>
                        {listDate.map((date,index)=>(
                            <td>{employeinfo.attendancedata.find(attendace=>attendace.attendancedate === date) ? employeinfo.attendancedata.find(attendance=>attendance.attendancedate === date).status  :"--"}</td>
                        ))}
                        <td>P -{employeinfo.attendancedata.filter(function(attendace){
                                    return attendace.status === 'P' || attendace.status === 'p';
                                }).length} <br />
                            A -{employeinfo.attendancedata.filter(function(attendace){
                                    return attendace.status === 'A' || attendace.status === 'a';
                                }).length}
                        </td>
                        </tr>))}
                </tbody>
                </table>
            </div>
        </div>:null}
      </Container-Fluid>
      </>
    );
}
}
export default ViewEmployeeAttendance;
           