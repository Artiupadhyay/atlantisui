import React from 'react';
import EmployeeNavbar from './components/employeenavbar';
import configs from './../config';
import {Redirect} from 'react-router-dom';
let status = ''
let status2 = ''

class AddEmployeeSubject extends React.Component{
    constructor() {
        super();
        this.state = {
            classes : null,
            subjectname:null,
            classid:null,
            redirect: false
        };
    }

    addSubject =()=>{
        fetch(configs.baseurl+'employee/subject',{
            method:'post',
            headers:{
                'auth':localStorage.getItem('token'),
                'Content-Type':'application/json'
            },
            body: JSON.stringify({subjectname:this.state.subjectname})
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

       if((localStorage.getItem('role')!=='Teacher' || localStorage.getItem('role')!=='Reception' || localStorage.getItem('role')!=='Accountant')  && ! this.state.redirect){
           localStorage.removeItem('token');
           localStorage.removeItem('image');
           localStorage.removeItem('role');
           this.setState({redrect:true});
        }

        return(
            <>
            {this.state.redirect?<Redirect to = '/' />:null}
            <Container-Fluid>
              <EmployeeNavbar/>
             
              <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-5">
                 {this.state.error?<div className="alert alert-danger" role="alert">{this.state.message}</div> :(this.state.success ? <div className="alert alert-primary" role="alert">{this.state.message}</div>:null)}
                <div className="border-primary d-flex flex-column mt-5">
                    <div className="row mt-4 ">
                        <span className="col-5">Subject Name</span>
                        <input type ="text" className="sm-ml-5 col-7 form-control" onChange={(event)=>this.setState({subjectname:event.target.value})}/>
                    </div>  
                    </div>
                    <div className="row mt-4">
                      <button className="sm-ml-5 col-5 mr-2 form-control btn btn-primary" onClick={this.addSubject}>Submit</button>
                      <button className="sm-ml-2 col-5 form-control btn btn-danger" onClick={()=>window.location.reload(true)}>Cancel</button>
                    </div>
                </div>
            </Container-Fluid> 
              </>
          );
    };
    
  }
export default AddEmployeeSubject;