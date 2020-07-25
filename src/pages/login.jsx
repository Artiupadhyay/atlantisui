import React from 'react';
import {connect} from'react-redux';

function Login(props) {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const login =()=>{
        console.log("loginhere");
        fetch('http://127.0.0.1:8000/auth/login/',{mode: 'no-cors',
            method:'post',
            body:JSON.stringify({email:userName, password:password})
        }).then(res=>res.json()).then(data=>{
            console.log("Data :-"+data);
        }).catch(err=>console.log(err));
    }

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