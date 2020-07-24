import React from 'react';
import {connect} from 'react-redux';


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
         <div className="p-5 schoolform ">
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
    <div className="col-md-4">
      <input type="text" className="form-control"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="img">Select image:</label>
    <input type="file" id="img" name="img" accept="image/*"/>
    <input type="submit" className="form-control"/></div>
   <button type=" btn btn-primary" name="submit"  onClick={()=>this.AddSchool()}>Add</button>
</div>
        
    );
}
export default AddSchool;