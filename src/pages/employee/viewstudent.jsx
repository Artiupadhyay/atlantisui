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
        fetch(configs.baseurl+'school/class',{
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
                this.setState({classes:data});
            }
        })
    }

    handleClassSelect = (event)=>{
        this.setState({selectedClass:event.target.value});
    };

    getStudents = ()=>{
        fetch(configs.baseurl+'school/class/students',{
            method:'post',
            headers:{'Content-Type': 'application/json',
            'auth':localStorage.getItem('token')
            },
            body:JSON.stringify({classid:this.state.selectedClass})
        }).then(res=>{
            status = res.status;
            return res.json();
        })
        .then(data=>{
            if(status ===200 || status === 201){
                this.setState({students: data});
            }
        })
    }

    render(){
        //if(localStorage.getItem('role')!=='School' && ! this.state.redirect){
          //  localStorage.removeItem('token');
          //  localStorage.removeItem('image');
          //  localStorage.removeItem('role');
          //  this.setState({redrect:true});
         // }
            return(
                <>
                {this.state.redirect?<Redirect to = '/' />:null}
                <Container-Fluid>
                <EmployeeNavbar />
                {this.state.classes ? 
                <>
                <div className="d-flex flex-row flex-wrap container align-self-center shadow mt-5 mb-5 pb-5">
                    
                    </div>
                    {this.state.students ?
                    <div className="d-flex align-content-center align-self-center flex-row flex-wrap container shadow mt-5 mb-5 pb-5">
                       {this.state.students.map((studentinfo, index)=>
                        <StudentCard studentinfo ={studentinfo} key={index}/>
                       )} 
                    </div>
                    :<div>Students not found</div>}
                        
                </>
                :<div>Kindly add a class then you can view students</div>}
                </Container-Fluid>
            </>
            );
        }
}
export default ViewStudent;