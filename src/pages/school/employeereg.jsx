import React from 'react';
import {connect} from 'react-redux';
import SchoolNav from './components/schoolnav';
    

function EmployeeReg(props) {
  const [UserName, setUserName] = React.useState(null);
  const [Password, setPassword] = React.useState(null);
  const [Email, setEmail] = React.useState(null);
  

  const handelUserNameChange = (event)=>{
      setUserName(event.target.value);
  }
  const handelPasswordChange = (event)=>{
      setPassword(event.target.value);
  }
  const handelEmailChange = (event)=>{
    setEmail(event.target.value);
}
  

    return(
      <>
      <SchoolNav/>
         <div className="ml-2 schoolform ">
             <h1 className="bd-highlight">Employee Registration</h1>
        <div className="form-group row">
         <label for="Username" className="col-sm-2 ">UserName</label>
        <div className="col-md-4">
        <input type="text" className="form-control"  value={UserName} onChange={handelUserNameChange}/>
       </div>
      </div>
     <div className="form-group row">
    <label for="Password" className="col-sm-2 ">Password</label>
    <div className="col-md-4">
      <input type="text" className="form-control"  value={Password} onChange={handelPasswordChange}/>
    </div>
  </div>
  <div className="form-group row">
    <label for="Email" className="col-sm-2 ">Email</label>
    <div className="col-md-4">
      <input type="text" className="form-control"  value={Email} onChange={handelEmailChange}/>
    </div>
  </div>       
  <div className="form-group row">
      <label for="Role" className="col-sm-2 ">Role</label>
  </div>
  <div className=" p-2 form-group row">
    <label for="img">Select image:</label>
    <input type="file" id="img" name="img" accept="image/*"/>
    <input type="submit" className=" form-control"  name="submit"  onClick={()=>this.AddEmployee()}/>
    </div>
</div>
</>
        
    );
}
export default EmployeeReg;
           