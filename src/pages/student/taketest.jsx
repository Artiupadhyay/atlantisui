import React from 'react';
import {Redirect} from 'react-router-dom'
import StudentNavbar from './components/studentnavbar';
import ViewTest from'./components/viewtest';
import configs from './../config';
let status = '';
class TakeTest extends React.Component{

    constructor() {
        super();
        this.state = {
           tests:null,
            redirect :false,
        };
    }

    componentWillMount = ()=>{
        fetch(configs.baseurl+'student/test/',{
            method:'get',
            headers:{
            'auth':localStorage.getItem('token')
            }
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
                <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-5 border border-success">
              
                    <div className="border-primary mt-5 col-12">
                    {this.state.tests ?
                    <>
                       {this.state.tests.map((test, index)=>
                        <ViewTest {...test} key={index}/>
                       )} 
                    </>
                    :null}
                    </div>
                </div>
                </Container-Fluid>
            </>
            );
        }
}
export default TakeTest;