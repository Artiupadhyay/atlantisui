import React from 'react';

function Login(props) {
    return(
           <div className="p-3 image row d-flex justify-content-center align align-items-center">
               <div className="col-md-6">
                   <h1 className=" content font-weight-bold mb-3">Welcome To Atlantis </h1>
                   <h2 className="content">Learning is fun!!</h2>
               </div>
               <div className="col-md-3">
            <form action="" className="form">
            <h4 className="font-weight-bold mb-3">SIGN IN </h4>
            <h4>To Access the Portal</h4>
            <div className="md-form md-outline">
                Username:
                <input type="text" className="form-control" placeholder="Enter your email here"/>
            </div>
            <div className="md-form md-outline">
                Password:
                <input type="text" className="form-control" placeholder="Enter password here"/>
            </div>
            <a className="link" href="#">Forgot password? Click here.</a>
            </form>
            </div>
        </div>

    );
} 

export default Login;