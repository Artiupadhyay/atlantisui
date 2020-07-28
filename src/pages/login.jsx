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

    const [redirect, setRedirect] = React.useState(false);
    const [path , setpath] = React.useState(null);

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
            if(status === 200 || status === 201){
                localStorage.setItem('role', data.role);
                localStorage.setItem('token', data.accessToken);
                localStorage.setItem('image',data.image);
                // setuserInfo({...data});
                if(data.role === 'Admin'){
                    props.history.push('/admin/dashboard/');
                }
                if(data.role === 'School'){
                    props.history.push('/school/schooldash/');
                }
                if(data.role === 'Teacher'){
                    props.history.push('/teacher/schooldash/');
                }
                if(data.role === 'Reception'){
                    props.history.push('/reception/schooldash/');
                }
                if(data.role === 'Accountant'){
                    props.history.push('/accountant /schooldash/');
                }
                seterror(null);
                setMessage("Login Successfull")
            }
            else{
                setMessage(null);
                seterror(data.message || data.email[0]);
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
    if(localStorage.getItem('token') && !redirect && ! path){
        fetch(config.baseurl+'auth/check/token',{
            method:'get',
            headers:{
                'auth':localStorage.getItem('token'),
            }
        }).then(res =>{
            status = res.status;
            return res.json();
        }).then(data=>{
            if(status === 200){
                if(localStorage.getItem('role') === 'Admin'){
                    setpath( '/admin/dashboard/');
                }
                if(localStorage.getItem('role') === 'School'){
                    setpath('/school/schooldash/');
                }
                if(localStorage.getItem('role') === 'Teacher'){
                    setpath('/teacher/teacherdash/');
                }
                if(localStorage.getItem('role') === 'Reception'){
                    setpath('/reception/receptiondash/');
                }
                if(localStorage.getItem('role') === 'Accountant'){
                    setpath('/accountant /accountant/');
                }
                setRedirect(true);
            }
            else {
                localStorage.removeItem('token');
                localStorage.removeItem('role');
                localStorage.removeItem('image');
            }
        })

    }

    return(<>
            {(redirect || path)? <Redirect to ={path} />:null}
           <div className="p-3 image row d-flex justify-content-center align align-items-center ">
               <div className="col-md-6">
                <h1 className=" content font-weight-bold mb-3">Welcome To Atlantis </h1>
                   <h2 className="content">Learning is fun!!</h2>
               </div>
               <div className="col-md-3">
            <div className="form">
            {error?<div className="alert alert-danger" role="alert">{error}</div> :(message ? <div className="alert alert-primary" role="alert">{message}</div>:null)}
            <h4 className="font-weight-bold mb-3">SIGN IN </h4>
            <h4>To Access the Portal</h4>
            <div className=" mt-2 md-form md-outline">
                Username:
                <input type="text" className="mt-2 form-control" value = {userName} placeholder="Enter your email here" onChange={handelUserNameChange}/>
            </div>
            <div className=" mt-2 md-form md-outline">
                Password:


                <input type="text" className=" mt-2 form-control" value={password} placeholder="Enter password here" onChange={handelPasswordChange}/>
            </div>
            <div className="md-form md-outline">
             <input type="button" className=" form-control mt-4 btn btn-primary" value="Submit" onClick={login} /></div>
                <a className="link" href="#">Forgot password? Click here.</a>
           
            </div>

            </div>
        </div>
        </>
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