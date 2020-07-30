import React from 'react';
import SchoolNav from './components/schoolnav';
    

class EmployeeRegistration extends React.Component {
  
  constructor() {
    super();
    this.state = {
        classes : null
    };
    
}
render(){
    return(
      <Container-Fluid>
      <SchoolNav/>
      <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-5">
          <div className="border-primary d-flex flex-column mt-5">
              <div className="row mt-4 ">
                <span className="col-5">Employee Name</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" />
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Father Name</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" />
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Mother Name</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" />
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Mobile No </span>
                <input type ="text" className="sm-ml-5 col-7 form-control" />
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Address Line 1</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" />
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Address Line 2</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" />
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Address Line 3</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" />
              </div>
              <div className="row mt-4 ">
                <span className="col-5">City</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" />
              </div>
              <div className="row mt-4 ">
                <span className="col-5">State</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" />
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Pin Code</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" />
              </div>
              <div className="row mt-4">
                <span className="col-5">Email</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" />
              </div>
              <div className="row mt-4">
                <span className="col-5">Password</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" />
              </div>
              <div className="row mt-4">
                <span className="col-5">Image</span>
                <input type ="file" className="sm-ml-5 col-7 form-control" />
              </div>
              <div className="row mt-4">
                <span className="col-5">DOB</span>
                <input type ="date" className="sm-ml-5 col-7 form-control" />
              </div>
              <div className="row mt-4">
                <span className="col-5">Salary</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" />
              </div>
              <div className="row mt-4">
                <span className="col-5">Class</span>
                  <select className="sm-ml-5 col-7 form-control">
                      <option value="---">---</option>
                  </select>
              </div>
              <div className="row mt-4">
                <span className="col-5">Date of Joining</span>
                <input type ="date" className="sm-ml-5 col-7 form-control" />
              </div>
              <div className="row mt-4">
                <button className="sm-ml-5 col-5 mr-2 form-control btn btn-primary" >Submit</button>
                <button className="sm-ml-2 col-5 form-control btn btn-danger">Cancel</button>
              </div>
          </div>
        </div>
      </Container-Fluid> 
      
        
    );
}
}
export default EmployeeRegistration;
           