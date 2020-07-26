import React from 'react';
import Navbar from './components/navbar';
import config from './../config';


function AddSchool(props) {
  const [userName, setuserName] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [email, setemail] = React.useState('');
  const [role, setrole] = React.useState('');
  const [image, setimage] = React.useState(null);
  const [status, setstatus] = React.useState(null);
  const [error, seterror] = React.useState(null);
  const [message, setMessage] = React.useState(null);

  
  const handeluserNameChange = (event)=>{
      setuserName(event.target.value);
  }
  const handelpasswordChange = (event)=>{
      setpassword(event.target.value);
  }
   
  const handelEmailChange = (event)=>{
      setemail(event.target.value);
  }

  const handelSelect =(event)=>{
    setrole(event.target.value);
  }

  const handelimageChange = (event)=>{
    setimage(event.target.files[0]);
  }
  const addSchool = () =>{
    let formData =  new FormData();
    formData.append('name',userName);
    formData.append('email',email);
    formData.append('role',role);
    formData.append('image', image, image.name);
    formData.append('password',password);

    fetch(config.baseurl+'auth/register/',{
      headers:{
        'auth':localStorage.getItem('token'),
      },
      method:'put',
      body:formData
    })
    .then(res=>{
      setstatus(res.status);
      return res.json();
    }).then(data=>{
      if(status == 201){
        seterror(null);
        setMessage(role+" register successful!")
      }
      else{
        setMessage(null);
        seterror(data.message || data.email[0]);
      }
    })
    .catch(err=> console.log("Error"+err));

  }
  

    return(
      <>
      <Navbar/>
      {error?<div className="alert alert-danger absolute" role="alert">{error}</div> :(message ? <div className="alert alert-primary" role="alert">{message}</div>:null)}
         <div className="ml-2 schoolform ">
             <h1 className="bd-highlight">Add School</h1>
        <div className="form-group row">
         <label className="col-sm-2 ">UserName</label>
        <div className="col-md-4">
        <input type="text" className="form-control"  value={userName} onChange={handeluserNameChange}/>
       </div>
      </div>
     <div className="form-group row">
    <label  className="col-sm-2 ">Password</label>
    <div className="col-md-4">
      <input type="text" className="form-control"  value={password} onChange={handelpasswordChange}/>
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-2 ">Email</label>
    <div className="col-md-4">
      <input type="text" className="form-control" value={email} onChange={handelEmailChange}/>
    </div>
  </div>
                                      <div className="form-group row">
                                        <label className="col-sm-2 ">Role</label>
                                      <select onChange = {handelSelect}>
                                      <option value="---">---</option>
                                        <option value="Admin">Admin</option>
                                        <option value="School">School</option>
                                        <option value="Reception">Receptionist</option>
                                        <option value="Teacher">Teacher</option>
                                        <option value="Student">Student</option>
                                      </select>
                                      </div>
  <div className=" p-2 form-group row">
    <label>Select image:</label>
    <input type="file" id="img" name="img" accept="image/*" onChange={handelimageChange} />
    <input type="submit" className=" form-control"  name="submit"  onClick={addSchool}/>
    </div>
</div>
</>
        
    );
}
export default AddSchool;