import React from 'react';
import {Redirect} from 'react-router-dom';
import SchoolNav from './components/schoolnav';
import EmployeeCard from './components/employeecard';
import configs from './../config';
let status = '';
class ViewEmployee extends React.Component{

    constructor() {
        super();
        this.state = {
            employee : null,
            redirect :false
        };
    }

    componentDidMount = ()=>{
        fetch(configs.baseurl+'school/employee',{
            method:'get',
            headers:{
                'auth':localStorage.getItem('token')
            }
        }).then(res=>{
            status = res.status
            return res.json()
        })
        .then(data=>{
            if(status === 200 || status === 201){
                this.setState({employee:data});
            }
        })
    }

    render(){

        if(localStorage.getItem('role')!=='School' && ! this.state.redirect){
            localStorage.removeItem('token');
            localStorage.removeItem('image');
            localStorage.removeItem('role');
            this.setState({redirect:true});
          }
            return(
                <>{this.state.redirect?<Redirect to = '/' />:null}
                <Container-Fluid>
                <SchoolNav />
                {this.state.employee?
                <div className="d-flex align-content-center align-self-center flex-row flex-wrap container shadow mt-5 mb-5 pb-5 border border-info">
                     {this.state.employee.map((employeeinfo, index)=>
                        <EmployeeCard employeeinfo ={employeeinfo}/>
                       )} 
                </div>
                :<div>Employee not found</div>}
                </Container-Fluid>
            </>
            );
        }
}
export default ViewEmployee;