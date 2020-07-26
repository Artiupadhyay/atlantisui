import React from 'react';
import {connect} from'react-redux';
import config from './config';
import { Redirect } from 'react-router-dom';

function Login(props) {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
   
    const [userInfo, setuserInfo] = React.useState(null);
    const [error, seterror] = React.useState(null);
    const [message, setMessage] = React.useState(null);
    
    var status = null;
    var url = config.baseurl+'auth/login/';
    var options = {
            headers:{'Content-Type': 'application/json'},
            method:'post',
            body:JSON.stringify({email:userName, password:password})
        }

    const login =()=>{
        fetch(url,options)
        .then(res=>{
            status  = res.status;
            return  res.json();
        })
        .then(data=>{
            console.log(status);
            if(status === 200 || status === 201){
                seterror(null);
                setMessage("Login Successfull")
                setuserInfo({...data});
                console.log(userInfo);
                localStorage.setItem('role', userInfo.role);
                localStorage.setItem('token', userInfo.accessToken);
                localStorage.setItem('image',userInfo.image);
                if(userInfo.role === 'Admin'){
                    props.history.push('/admin/dashboard/');
                }
                if(userInfo.role === 'School'){
                    props.history.push('/school/schooldash/');
                }
                if(userInfo.role === 'Teacher'){
                    return <Redirect to = '/'/>;
                }
                if(userInfo.role === 'Reception'){
                    return <Redirect to = '/'/>;
                }
                if(userInfo.role === 'Accountant'){
                    return <Redirect to = '/'/>;
                }
            }
            else{
                setMessage(null);
                seterror(data.message || data.email[0])
            }
        })
        .catch(err=>console.log(err));
    };

    const handelUserNameChange = (event)=>{
        setUserName(event.target.value);
    }
    const handelPasswordChange = (event)=>{
        setPassword(event.target.value);
    }
    
    
    return(
           <div className="p-3 image row d-flex justify-content-center align align-items-center">
               <div className="col-md-6">
                   <h1 className=" content font-weight-bold mb-3">Welcome To Atlantis </h1>
                   <h2 className="content">Learning is fun!!</h2>
               </div>
               <div className="col-md-3">
            <div className="form">
            {error?<div className="alert alert-danger" role="alert">{error}</div> :(message ? <div className="alert alert-primary" role="alert">{message}</div>:null)}
            <h4 className="font-weight-bold mb-3">SIGN IN </h4>
            <h4>To Access the Portal</h4>
            <div className="md-form md-outline">
                Username:
                <input type="text" className="form-control" value = {userName} placeholder="Enter your email here" onChange={handelUserNameChange}/>
            </div>
            <div className="md-form md-outline">
                Password:


                <input type="text" className="form-control" value={password} placeholder="Enter password here" onChange={handelPasswordChange}/>
            </div>
             <input type="button" className="btn btn-primary" value="Submit" onClick={login} />
                <a className="link" href="#">Forgot password? Click here.</a>
           
            </div>

            </div>
        </div>

    );
}
 const mapStateToProps = (state)=>{
     return {
         authenticate:state.authenticate
    };
 }
 const mapDispatchToProps = (dispatch)=>{
     return {
         changeName : ()=>{dispatch({})}
     };
 }

  

export default connect(mapStateToProps,mapDispatchToProps)(Login);