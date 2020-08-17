import React from 'react';
import {Redirect} from 'react-router-dom';
import Employeenavbar from './components/employeenavbar';
import config from  './../config';
    
let status = ''
class EmployeeProfile extends React.Component {
  
  constructor() {
    super();
    this.state = {
        name:'',
        email:'',
        address1:'',
        address2:'',
        address3:'',
        city:'',
        state:'',
        zip:'',
        redirect:false,
        error:false,
        success:false,
        message:''
    };
  }

  componentDidMount = ()=>{
    fetch(config.baseurl+'auth/profile',{
      method:'get',
      headers:{
        'auth':localStorage.getItem('token')
      }
    }).then(res=>res.json())
    .then(data=>{
      if(data.personalInfo && data.additionalInfo){
        this.setState({...data.personalInfo, ...data.additionalInfo});
      }
    })
  }

  updateProfile =()=>{
    const formData = new FormData();
    formData.append('name', this.state.name)
    formData.append('email', this.state.email)
    formData.append('mobile', this.state.mobile)
    formData.append('dob', this.state.dob)
    formData.append('fathername', this.state.fathername)
    formData.append('mothername', this.state.mothername)
    formData.append('address1', this.state.address1)
    formData.append('address2', this.state.address2)
    formData.append('address3', this.state.address3)
    formData.append('city', this.state.city)
    formData.append('state', this.state.state)
    formData.append('zip', this.state.zip)

    fetch(config.baseurl+'auth/profile',{
      method:'put',
      headers:{
        'auth':localStorage.getItem('token')
      },
      body: formData
    })
    .then(res=>{
      status = res.status;
      return res.json();
    })
    .then(data=>{
      if(status === 200 || status === 201){
        localStorage.setItem('name',this.state.name);
        this.setState({error:false,success:true ,message : "Profile Updated"});
        
      }
      else{
        this.setState({error:true,success:false, message:JSON.stringify(data)});
      }
    }).catch(err=>{
      this.setState({error:true,success:false, message:JSON.stringify(err)});
    })
  }
    
render(){
      if(!['Teacher','Reception','Accountant'].includes(localStorage.getItem('role'))  && ! this.state.redirect){
        localStorage.removeItem('token');
        localStorage.removeItem('image');
        localStorage.removeItem('role');
        this.setState({redirect:true});
    }
    return(
      <>
      {this.state.redirect?<Redirect to = '/' />:null}
            
      <Container-Fluid>
      <Employeenavbar />
      {this.state.error?<div className="alert alert-danger" role="alert">{this.state.message}</div> :(this.state.success ? <div className="alert alert-primary" role="alert">{this.state.message}</div>:null)}
      <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-5">
          <div className="border-primary d-flex flex-column mt-5">
              <div className="row mt-4 ">
                <span className="col-5">Name</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})}/>
              </div>
              <div className="row mt-4">
                <span className="col-5">Email</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.email} onChange={(event)=>this.setState({email:event.target.value})}/>
              </div>
              <div className="row mt-4">
                <span className="col-5">Mobile</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.mobile} onChange={(event)=>this.setState({mobile:event.target.value})}/>
              </div>
              <div className="row mt-4">
                <span className="col-5">Father Name</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.fathername} onChange={(event)=>this.setState({fathername:event.target.value})}/>
              </div>
              <div className="row mt-4">
                <span className="col-5">Mother Name</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.mothername} onChange={(event)=>this.setState({mothername:event.target.value})}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Address Line 1</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.address1} onChange={(event)=>this.setState({address1:event.target.value})}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Address Line 2</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.address2} onChange={(event)=>this.setState({address2:event.target.value})}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Address Line 3</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.address3} onChange={(event)=>this.setState({address3:event.target.value})}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">City</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.city} onChange={(event)=>this.setState({city:event.target.value})}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">State</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.state} onChange={(event)=>this.setState({state:event.target.value})}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Pin Code</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.zip} onChange={(event)=>this.setState({zip:event.target.value})}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">DOB</span>
                <input type ="date" className="sm-ml-5 col-7 form-control" value={this.state.dob} onChange={(event)=>this.setState({dob:event.target.value})}/>
              </div>
              <div className="row mt-4">
                <button className="sm-ml-5 col-5 mr-2 form-control btn btn-primary" onClick={ this.updateProfile}>Update Profile</button>
                <button className="sm-ml-2 col-5 form-control btn btn-danger" onClick={()=>window.location.reload(true)}>Cancel</button>
              </div>
          </div>
        </div>
      </Container-Fluid> 
      </>
    );
}
}
export default EmployeeProfile;
           