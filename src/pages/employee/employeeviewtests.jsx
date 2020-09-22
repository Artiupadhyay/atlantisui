import React from 'react';
import {Redirect} from 'react-router-dom'
import EmployeeNavbar from './components/employeenavbar';
import ViewTest from'./components/viewtest';
import configs from './../config';
let status = '';
class EmployeeViewTests extends React.Component{

    constructor() {
        super();
        this.state = {
            classes : null,
            selectedClass : null,
            students : null,
            redirect :false,
        };
    }



    handleClassSelect = (event)=>{
        this.setState({selectedClass:event.target.value});
    };

    getTests = ()=>{
        fetch(configs.baseurl+'testapp/tests/',{
            method:'put',
            headers:{'Content-Type': 'application/json',
            'auth':localStorage.getItem('token')
            },
            body:JSON.stringify({classid:this.state.classid, status: this.state.status})
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
                <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-5 border border-success">
              
                    <div className="border-primary d-flex flex-column mt-5">
                    
                        <div className="row mt-4 ">
                            <span className="col-5">Status</span>
                            <select className="sm-ml-5 col-7 form-control"  onChange={(event)=>this.setState({status:event.target.value})}>
                                <option value="---">--</option>
                                <option value="Draft">Draft</option>
                                <option value="Published">Published</option>
                                <option value="Expired">Expired</option>
                            </select>
                        </div>
                        <button className="btn btn-primary mx-auto mt-3" onClick={this.getTests}>Get Tests</button>
                    </div>
                    </div>
                    {this.state.tests ?
                    <div className="container shadow mt-5 mb-5 pb-5">
                       {this.state.tests.map((test, index)=>
                        <ViewTest {...test} key={index}/>
                       )} 
                    </div>
                    :null}
                        
                </>
                </Container-Fluid>
            </>
            );
        }
}
export default EmployeeViewTests;