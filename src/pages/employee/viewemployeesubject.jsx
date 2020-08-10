import React from 'react';
import EmployeeNavbar from './components/employeenavbar';
import configs from '../config';
import ViewSubjectCard from './components/viewsubjectcard';
let status = '';
class ViewEmployeeSubject extends React.Component{

    constructor() {
        super();
        this.state = {
            classes : null,
        };
    }

    componentDidMount =()=>{
        fetch(configs.baseurl+'school/subject',{
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
                this.setState({classes:data});
            }
            else{
                console.log('error')
            }
        })
    }

    
    render(){
            return(
                <Container-Fluid>
                     <EmployeeNavbar />
                    <div className="d-flex align-content-center align-self-center flex-row flex-wrap container shadow mt-5 mb-5 pb-5">
                        <ViewSubjectCard />
                    
                    </div>
                </Container-Fluid>
            
            );
        }
}
export default ViewEmployeeSubject;