import React from 'react';
import EmployeeNavbar from './components/employeenavbar';
import configs from './../config';
import {Redirect} from 'react-router-dom';
import HomeworkCard from './components/homeworkcard';
let status = ''

class ViewHomeWork extends React.Component{
    constructor() {
        super();
        this.state = {
            homeworkimage:null,
            homework:null,
            redirect: false
        };
    }

    componentDidMount = ()=>{
        fetch(configs.baseurl + "employee/homework",{
            method:'get',
            headers:{
                'auth':localStorage.getItem('token')
            }
        }).then(res =>{
            status = res.status;
            return res.json();
        }).then(data =>{
            if(status === 200 || status === 201){
                this.setState({homeworks: data, message:null});
            }
            else{
                this.setState({error:true,success:false, message:JSON.stringify(data)});
              }
        })
    }
    render(){

        if(!['Teacher','Reception','Accountant'].includes(localStorage.getItem('role'))  && ! this.state.redirect){
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
             
              <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-5">
                 {this.state.error?<div className="alert alert-danger" role="alert">{this.state.message}</div> :(this.state.success ? <div className="alert alert-primary" role="alert">{this.state.message}</div>:null)}
                 {this.state.homeworks ?  this.state.homeworks.map((homeworkinfo, index)=><HomeworkCard homeworkinfo = {homeworkinfo} key={index}/>): "Kindly add somw homework"}
                </div>
            </Container-Fluid> 
              </>
          );
    };
    
  }
export default ViewHomeWork;