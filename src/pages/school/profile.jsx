import React from 'react';
import {Redirect} from 'react-router-dom';
import SchoolNav from './components/schoolnav';
import config from  './../config';
    

class Profile extends React.Component {
  
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
        zip:''
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
    
render(){
      if(localStorage.getItem('role')!=='School' && ! this.state.redirect){
        localStorage.removeItem('token');
        localStorage.removeItem('image');
        localStorage.removeItem('role');
        this.setState({redrect:true});
    }
    console.log(this.state);
    return(
      <>
      {this.state.redirect?<Redirect to = '/' />:null}
            
      <Container-Fluid>
      <SchoolNav/>
      <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-5">
          <div className="border-primary d-flex flex-column mt-5">
              <div className="row mt-4 ">
                <span className="col-5">School Name</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.name}/>
              </div>
              <div className="row mt-4">
                <span className="col-5">Email</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.email}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Address Line 1</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.address1}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Address Line 2</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.address2}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Address Line 3</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.address3}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">City</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.city}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">State</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.state}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Pin Code</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.zip}/>
              </div>
              <div className="row mt-4">
                <button className="sm-ml-5 col-5 mr-2 form-control btn btn-primary" >Update Profile</button>
                <button className="sm-ml-2 col-5 form-control btn btn-danger">Cancel</button>
              </div>
          </div>
        </div>
      </Container-Fluid> 
      </>
    );
}
}
export default Profile;
           