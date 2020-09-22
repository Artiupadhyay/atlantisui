import React from 'react';
import EmployeeNavbar from './components/employeenavbar';
import configs from './../config';
import {Redirect} from 'react-router-dom';
let status2 = ''

class EmployeeAddTest extends React.Component{
    constructor() {
        super();
        this.state = {
            classes : null,
            subjectname:null,
            classid:null,
            redirect: false
        };
    }

    addTest =()=>{
        fetch(configs.baseurl+'testapp/tests/',{
            method:'post',
            headers:{
                'auth':localStorage.getItem('token'),
                'Content-Type':'application/json'
            },
            body: JSON.stringify({classid:this.state.classid,testname:this.state.testname, duration: this.state.duration, status: this.state.status, expiredate: this.state.expiredate})
        })
        .then(res =>{
            
            status2 =  res.status;
            return res.json();
        })
        .then(data=>{
            if(status2 === 200 || status2 === 201){
                this.setState({error:false,success:true ,message : "Successfully created"});
              }
              else{
                this.setState({error:true,success:false, message:JSON.stringify(data)});
              }
            }).catch(err=>{
              this.setState({error:true,success:false, message:JSON.stringify(err)});
            })
    }
    render(){

        if(!['Teacher','Reception','Accountant'].includes(localStorage.getItem('role')) && ! this.state.redirect){
            localStorage.removeItem('token');
            localStorage.removeItem('image');
            localStorage.removeItem('role');
            this.setState({redirect:true});
        }

        return(
            <>
            {this.state.redirect?<Redirect to = '/' />:null}
            <Container-Fluid>
              <EmployeeNavbar/>
              <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-5 border border-success">
                 {this.state.error?<div className="alert alert-danger" role="alert">{this.state.message}</div> :(this.state.success ? <div className="alert alert-primary" role="alert">{this.state.message}</div>:null)}
                <div className="border-primary d-flex flex-column mt-5">
                    
                    <div className="row mt-4 ">
                        <span className="col-5">Test Name</span>
                        <input type ="text" className="sm-ml-5 col-7 form-control" onChange={(event)=>this.setState({testname:event.target.value})}/>
                    </div>
                    <div className="row mt-4 ">
                        <span className="col-5">Test duration</span>
                        <select className="sm-ml-5 col-7 form-control"  onChange={(event)=>this.setState({duration:event.target.value})}>
                            <option value="0">---</option>
                            <option value="15">15 Minutes</option>
                            <option value="30">30 Minutes</option>
                            <option value="45">45 Minutes</option>
                            <option value="60">60 Minutes</option>
                            <option value="75">1 Hour 15 Minutes</option>
                            <option value="90">1 Hour 30 Minutes</option>
                        </select>
                    </div>
                    <div className="row mt-4 ">
                        <span className="col-5">Status</span>
                        <select className="sm-ml-5 col-7 form-control"  onChange={(event)=>this.setState({status:event.target.value})}>
                            <option value="---">--</option>
                            <option value="Draft">Draft</option>
                            <option value="Published">Published</option>
                            <option value="Expired">Expired</option>
                        </select>
                    </div>
                    <div className="row mt-4">
                        <span className="col-5">Expired Date</span>
                        <input type ="date" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({expiredate:event.target.value})}}/>
                    </div>
                    <div className="row mt-4">
                      <button className="sm-ml-5 col-5 mr-2 form-control btn btn-primary" onClick={this.addTest}>Submit</button>
                      <button className="sm-ml-2 col-5 form-control btn btn-danger" onClick={()=>window.location.reload(true)}>Cancel</button>
                    </div>
                </div>
                </div>
            </Container-Fluid> 
              </>
          );
    };
    
  }
export default EmployeeAddTest;