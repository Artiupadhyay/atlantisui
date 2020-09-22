import React from 'react';
import {Redirect} from 'react-router-dom'
import EmployeeNavbar from './components/employeenavbar';
import configs from '../config';
import TestView from './components/TestView';
let status = '';
class EmployeeTestViewForQuestion extends React.Component{

    constructor() {
        super();
        this.state = {
            status:"Draft"
        };
    }


    handleClassSelect = (event)=>{
        this.setState({selectedClass:event.target.value});
    };

    componentWillMount = ()=>{
        fetch(configs.baseurl+'testapp/tests/',{
            method:'put',
            headers:{'Content-Type': 'application/json',
            'auth':localStorage.getItem('token')
            },
            body:JSON.stringify({status: this.state.status})
        }).then(res=>{
            status = res.status;
            return res.json();
        })
        .then(data=>{
            if(status === 200 || status === 201){
                this.setState({tests: data});
            }
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
                <EmployeeNavbar />
                <>
                    {this.state.tests ?
                    <div className="container shadow mt-5 mb-5 pb-5">
                        <div className="row mt-4 mr-4 ml-4">
                            <span className="col">Expire Date</span>
                            <span className="col">Duration</span>
                            <span className="col">Test Name</span>
                            <span className="col">Total Question</span>
                            <div className="col">
                            </div>
                        </div>
                       {this.state.tests.map((test, index)=>
                        <TestView {...test} key={index}/>
                       )} 
                    </div>
                    :<div>Test not found</div>}
                        
                </>
                </Container-Fluid>
            </>
            );
        }
}
export default EmployeeTestViewForQuestion;