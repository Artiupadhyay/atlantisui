import React from 'react';
import {Redirect} from 'react-router-dom'
import EmployeeNavbar from './components/employeenavbar';
import StudentCard from './components/studentcard';
import configs from './../config';
let status = '';
class ViewStudent extends React.Component{

    constructor() {
        super();
        this.state = {
            classes : null,
            selectedClass : null,
            students : null,
            redirect :false,
        };
    }

    

    componentDidMount = ()=>{
        fetch(configs.baseurl+'employee/student',{
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
                data.sort((a, b) => a.classname - b.classname);
                this.setState({students:data});
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
                <>
                {this.state.redirect?<Redirect to = '/' />:null}
                <Container-Fluid>
                <EmployeeNavbar />
                {this.state.students ? 
                <>
                    <div className="d-flex align-content-center align-self-center flex-row flex-wrap container shadow mt-5 mb-5 pb-5">
                       {this.state.students.map((studentinfo, index)=>
                        <StudentCard studentinfo ={studentinfo} key={index}/>
                       )} 
                    </div>
                </>
                :<div>Kindly add some students</div>}
                </Container-Fluid>
            </>
            );
        }
}
export default ViewStudent;