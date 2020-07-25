import React from 'react';
import {connect} from 'react-redux';
import Navbar from './components/navbar';


function AddSchool(props) {
  const [UserName, setUserName] = React.useState(null);
  const [Password, setPassword] = React.useState(null);
  

  const handelUserNameChange = (event)=>{
      setUserName(event.target.value);
  }
  const handelPasswordChange = (event)=>{
      setPassword(event.target.value);
  }
  

    return(
      <>
      <Navbar/>
         <div className="ml-2 schoolform ">
             <h1 className="bd-highlight">Add School</h1>
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
      <input type="text" className="form-control"/>
    </div>
  </div>
                                      <div className="form-group row">
                                        <label for="Role" className="col-sm-2 ">Role</label>
                                      <select >
                                        <option value="Admin">Admin</option>
                                        <option value="Admin">School</option>
                                        <option value="Admin">Receptionist</option>
                                        <option value="Admin">Teacher</option>
                                        <option value="Admin">Student</option>
                                        
                                      </select>
                                      </div>
  <div className=" p-2 form-group row">
    <label for="img">Select image:</label>
    <input type="file" id="img" name="img" accept="image/*"/>
    <input type="submit" className=" form-control"  name="submit"  onClick={()=>this.AddSchool()}/>
    </div>
</div>
</>
        
    );
}
export default AddSchool;