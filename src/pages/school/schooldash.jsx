import React from 'react';
import {Redirect} from 'react-router-dom';
import {Container} from 'react-bootstrap'
import SchoolNav from './components/schoolnav';
import Config from './../config';
class SchoolDash extends React.Component{
  constructor(){
    super();
    this.state = {
      redirect:false
    }
  };

  componentDidMount =()=>{
    fetch(Config.baseurl+'school/profile',{
      method:'get',
      headers:{
        "auth":localStorage.getItem('token')
      }
    }).then(res=>res.json())
    .then(data=> this.setState({schoolinfo:data}))
  }
  render(){

    if(localStorage.getItem('role')!=='School' && ! this.state.redirect){
      localStorage.removeItem('token');
      localStorage.removeItem('image');
      localStorage.removeItem('role');
      this.setState({redirect:true});
    }

    return(<>{this.state.redirect?<Redirect to = '/' />:null}
            <SchoolNav/>
            <Container>
              {this.state.schoolinfo ? 
              <>
                <div className="row d-flex flex-column justify-content mt-4 text-center">
                  <div class="text-center">
                    <img src={"data:image/jpeg;base64,"+ localStorage.getItem('image')} style={{width:"20vw", height:"25vh"}} className="rounded mr-4" alt="Card"/>
                  </div>
                  <h1>{this.state.schoolinfo.school.name}, {this.state.schoolinfo.schoolinfo.address1}, {this.state.schoolinfo.schoolinfo.address2}, {this.state.schoolinfo.schoolinfo.city}</h1>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <div className="card text-white bg-success border border-success text-center" style={{maxWidth: "15rem"}}>
                    <div className="card-header">Student Count {this.state.schoolinfo.studentcount}</div>
                  </div>

                  <div className="card text-white bg-success border border-success text-center" style={{maxWidth: "15rem"}}>
                    <div className="card-header">Employee Count {this.state.schoolinfo.employeecount}</div>
                  </div>
                  </div>
                </>
              :null}
            </Container>
            </>

    );

  }
    
}

export default SchoolDash;