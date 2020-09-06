import React from 'react';
import config from './../../config';
import {Modal, Button} from 'react-bootstrap';
export default class EmployeModel extends React.Component {
  constructor(){
    super();
    this.state={
      show:false
    }
  };

  componentDidMount=()=>{
    fetch(config.baseurl+'school/get/employee/profile',{
      method:'post',
      headers:{
        'Content-Type':'application/json',
        'auth':localStorage.getItem('token')
      },
      body:JSON.stringify({id:this.props.employeeid})
    }).then(res=>res.json())
    .then(data=>{
      this.setState({...data.employeinfo, ...data.userinfo, userid:this.props.employeeid, classes:data.classes});
    })
  }

  handleUpdate=()=>{
   
    const formData = new FormData();

    formData.append('userid', this.state.userid);
    formData.append('name',this.state.name);
    formData.append('email',this.state.email);  
    formData.append('address1',this.state.address1);
    formData.append('address2',this.state.address2);
    formData.append('address3',this.state.address3);
    formData.append('city', this.state.city);
    formData.append('state',this.state.state);
    formData.append('zip',this.state.zip);
    formData.append('classid',this.state.classid);
    formData.append('fathername',this.state.fathername);
    formData.append('mothername', this.state.mothername);
    formData.append('mobile',this.state.mobile);
    formData.append('salary',this.state.salary);
    formData.append('dob',this.state.dob);
    formData.append('dateOfJoining',this.state.dateOfJoining);

    fetch(config.baseurl+'school/get/employee/profile',{
      method:'put',
      headers:{
        'auth':localStorage.getItem('token')
      },
      body:formData
    }).then(res=>res.json())
    .then(data=>{
     console.log(data)
    })
  }
  render(){
    console.log(this.state);
    return (
      <>
        <Button variant="primary" onClick={()=>this.setState({show:true})}>
          View More
        </Button>
  
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
          onHide={()=>this.setState({show:false})}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Student info</Modal.Title>
          </Modal.Header>
          {this.state.userid?<Modal.Body className="p-4">
              <div className="row mt-4 ">
                <span className="col-5">Employee Name</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.name} onChange={(event)=>{this.setState({name:event.target.value})}} />
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Father Name</span>
                <input type ="text" className="sm-ml-5 col-7 form-control"  value={this.state.fathername} onChange={(event)=>{this.setState({fathername:event.target.value})}} />
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Mother Name</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.mothername}  onChange={(event)=>{this.setState({mothername:event.target.value})}} />
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Mobile No </span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.mobile} onChange={(event)=>{this.setState({mobile:event.target.value})}} />
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Address Line 1</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.address1}  onChange={(event)=>{this.setState({address1:event.target.value})}}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Address Line 2</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.address2}  onChange={(event)=>{this.setState({address2:event.target.value})}}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Address Line 3</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.address3} onChange={(event)=>{this.setState({address3:event.target.value})}}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">City</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.city} onChange={(event)=>{this.setState({city:event.target.value})}}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">State</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.state} onChange={(event)=>{this.setState({state:event.target.value})}}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Pin Code</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.zip} onChange={(event)=>{this.setState({zip:event.target.value})}}/>
              </div>
              <div className="row mt-4">
                <span className="col-5">Email</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}}/>
              </div>
              
              <div className="row mt-4">
               <span className="col-12">Current Class : {this.state.currentclass}</span>
              </div>
              <div className="row mt-4">
                <span className="col-5">DOB</span>
                <input type ="date" className="sm-ml-5 col-7 form-control" value={this.state.dob} onChange={(event)=>{this.setState({dob:event.target.value})}}/>
              </div>
              <div className="row mt-4">
                <span className="col-5">Salary</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.salary} onChange={(event)=>{this.setState({salary:event.target.value})}}/>
              </div>
              <div className="row mt-4">
                <span className="col-5">Class</span>
                  <select className="sm-ml-5 col-7 form-control" onChange={(event)=>{this.setState({classid:event.target.value})}}>
                    <option value="---">---</option>
                    {this.state.classes?this.state.classes.map((classinfo,index)=>
                        <option value={classinfo.id} key={index}>{classinfo.classname +" "+ classinfo.section} </option>
                    ):null}
                  </select>
              </div>
              <div className="row mt-4">
                <span className="col-5">Date Of Joining</span>
                <input type ="date" className="sm-ml-5 col-7 form-control" value={this.state.dateOfJoining}  onChange={(event)=>{this.setState({dateOfJoining:event.target.value})}}/>
              </div>
              
          </Modal.Body>:null}
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>this.setState({show:false})}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleUpdate}>Update</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}