import React from 'react';
import {Redirect} from 'react-router-dom'
import StudentNavbar from './components/studentnavbar';
import configs from './../config';
let status = '';
class StudentViewTests extends React.Component{

    constructor() {
        super();
        this.state = {
            classes : null,
            selectedClass : null,
            students : null,
            redirect :false,
        };
    }

    

    componentWillMount = ()=>{
        fetch(configs.baseurl+'student/get/test/scores',{
            method:'get',
            headers:{
                'auth':localStorage.getItem('token')
            }
        }).then(res=>{
            status = res.status
            return res.json();
        })
        .then(data=>{
            if(status === 200 || status === 201){
                this.setState({tests:data});
            }
        })
    }

     
    render(){
        if(localStorage.getItem('role')!=='Student' && ! this.state.redirect){
            localStorage.removeItem('token');
            localStorage.removeItem('image');
            localStorage.removeItem('role');
            this.setState({redirect:true});
          }
            return(
                <>
                {this.state.redirect?<Redirect to = '/' />:null}
                <Container-Fluid>
                <StudentNavbar />
                {this.state.tests ? 
                <>
                
                <div className="container shadow mt-5 mb-5 pb-5 border border-success">
                <div className="row mt-4 mr-4 ml-4">
                            <span className="col">Expire Date</span>
                            <span className="col">Duration</span>
                            <span className="col">Test Name</span>
                            <span className="col">Status</span>
                            <span className="col">Result</span>
                        </div>
                    {this.state.tests.map((test, index)=>{
                        return(<div className="row mt-4 mr-4 ml-4">
                            <span className="col">{test.expiredate}</span>
                            <span className="col">{test.duration}</span>
                            <span className="col">{test.testname}</span>
                            <span className="col">{test.status}</span>
                            <span className="col">{test.result}</span>
                        </div>)
                    
                    })}
                    
                </div>
                </>
                :<div>Kindly add a class then you can view students</div>}
                </Container-Fluid>
            </>
            );
        }
}
export default StudentViewTests;