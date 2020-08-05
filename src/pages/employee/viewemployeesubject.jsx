import React from 'react';
import EmployeeNavbar from './components/employeenavbar';
import configs from '../config';
import {Redirect} from 'react-router-dom';

let status = '';
class ViewEmployeeSubject extends React.Component{

    constructor() {
        super();
        this.state = {
            classes : null,
        };
    }

    componentDidMount =()=>{
        fetch(configs.baseurl+'employee/subject',{
            method:'get',
            headers:{
                'auth':localStorage.getItem('token')
                }
        })
        .then(res =>{
            status =  res.status;
            return res.json();
        })
        .then(data=>{
            if(status ===200 || status ===201){
                data.sort((a, b) => a.classname - b.classname);
                this.setState({subjects:data});
            }
            else{
                console.log('error')
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
            return(
                <Container-Fluid>
                     {this.state.redirect ? <Redirect to = '/' />:null}
            
                     <EmployeeNavbar />
                    <div className="d-flex align-content-center align-self-center flex-row flex-wrap container shadow mt-5 mb-5 pb-5">
                      <div className="mt-2">
                      {this.state.subjects? 
                      this.state.subjects.map((subject,index)=>
                          <li className="btn bg-info text-white ml-4 " key={index}>{subject.subjectname}</li>
                      ) 
                      :null}  
                      </div>
                    </div>
                </Container-Fluid>
            
            );
        }
}
export default ViewEmployeeSubject;