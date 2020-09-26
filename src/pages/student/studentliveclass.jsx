import React from 'react';
import {Redirect} from 'react-router-dom';
import StudentNavbar from './components/studentnavbar';
import config from  './../config';
import Chat from './components/ChatApp/Chat/Chat'
    
let status = ''
class StudentLiveClass extends React.Component {
  
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

  componentWillMount =()=>{
      fetch(config.baseurl+'school/live/class',{
        method:"get",
        headers:{
          'auth':localStorage.getItem('token'),
        },
      }).then(res=>{
        status = res.status
        return res.json();
      }).then(data=>{
        if(status === 200 || status === 201){
          let currentUrlParams = new URLSearchParams(window.location.search);
          currentUrlParams.set('name', data.email);
          currentUrlParams.set('room', data.roomid);
          this.props.history.push(window.location.pathname + "?" + currentUrlParams.toString());
          this.setState({golive:true, ...data})
        }
        else{
          alert(data.message)
        }
      })
      
    }  

    
render(){
  console.log(this.state)
      if(!['Student'].includes(localStorage.getItem('role'))  && ! this.state.redirect){
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
      {this.state.error?<div className="alert alert-danger" role="alert">{this.state.message}</div> :(this.state.success ? <div className="alert alert-primary" role="alert">{this.state.message}</div>:null)}
      
        {this.state.golive ?
        <>
           <iframe className="card-img-top"  src={this.state.link} title={this.state.email}  alt="Card image cap" height="600px" width="600px" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <Chat />
        </> :
        null}
      </Container-Fluid> 
      </>
    );
}
}
export default StudentLiveClass;
           