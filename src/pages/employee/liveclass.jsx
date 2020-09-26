import React from 'react';
import {Redirect} from 'react-router-dom';
import Employeenavbar from './components/employeenavbar';
import config from  './../config';
import Chat from './components/ChatApp/Chat/Chat'
    
let status = ''
class LiveClass extends React.Component {
  
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
        message:'',
        golive:false
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

  goLive =()=>{
    fetch(config.baseurl+'school/live/class',{
      method:"post",
      headers:{
        'auth':localStorage.getItem('token'),
        'Content-Type':'application/json'
      },
      body: JSON.stringify({link:this.state.classLink, roomid:this.state.classid.replace(/-/g, '')})
    }).then(res=>{
      status = res.status
      return res.json();
    }).then(data=>{
      if(status === 200 || status === 201){
        let currentUrlParams = new URLSearchParams(window.location.search);
        currentUrlParams.set('name', this.state.email);
        currentUrlParams.set('room', this.state.classid.replace(/-/g, ''));
        this.props.history.push(window.location.pathname + "?" + currentUrlParams.toString());
        this.setState({golive:true})
      }
      else{
        alert(data.message)
      }
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
              <div className="row mt-4">
                <span className="col-5">Class Link</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.classLink?this.state.classLink:""} onChange={(event)=>this.setState({classLink:event.target.value})}/>
              </div>
              <div className="row mt-4">
                <button className="sm-ml-5 col-5 mr-2 form-control btn btn-primary" onClick={this.goLive}>Go Live</button>
            </div>
          </div>
        </div>
        {this.state.golive ?
        <>
         <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-5">
            <iframe src={this.state.classLink} title={"Live class"} alt="Card image cap" height="400px" width="400px" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        <Chat /> 
        </>:null}
      </Container-Fluid> 
      </>
    );
}
}
export default LiveClass;
           