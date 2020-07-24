import React from 'react';


function AddSchool(props) {
    return(
         <div className="p-5 schoolform border">
             <h1 className="bd-highlight">Add School</h1>
        <div className="form-group row">
         <label for="schoolname" className="col-sm-2 ">School Name</label>
        <div className="col-md-4">
        <input type="text" className="form-control"/>
       </div>
      </div>
     <div className="form-group row">
    <label for="address" className="col-sm-2 ">School Address 1</label>
    <div className="col-md-4">
      <input type="text" className="form-control"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="address" className="col-sm-2 ">School Address 2</label>
    <div className="col-md-4">
      <input type="text" className="form-control"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="mobile" className="col-sm-2 ">Mobile</label>
    <div className="col-md-4">
      <input type="text" className="form-control"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="city" className="col-sm-2 ">City</label>
    <div className="col-md-4">
      <input type="text" className="form-control"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="state" className="col-sm-2 ">State</label>
    <div className="col-md-4">
      <input type="text" className="form-control"/>
    </div>
    </div>
    <div className="form-group row">
    <label for="zip" className="col-sm-2 ">Zip</label>
    <div className="col-md-4">
      <input type="text" className="form-control"/>
    </div>
    </div>
  </div>



        
    );
}
export default AddSchool;