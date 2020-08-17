import React from 'react';
import {Redirect} from 'react-router-dom';
import SchoolNav from './components/schoolnav';
import configs  from './../config';
import config from './../config';
var status1 = ''
var status2 = ''
    

class AddStudent extends React.Component {
  
  constructor() {
    super();
    this.state = {
        classes : null,
        studentName:'',
        fatherName: '',
        motherName: '',
        mobileNo1: '',
        mobileNo2: '',
        address1: '',
        address2: '',
        address3: '',
        city: '',
        state: '',
        zip: '',
        email: '',
        image:'',
        password:'',
        dob:'',
        srno: '',
        class:'',
        admissionDate:'',
        redirect:false,
        error:false,
        success:false,
        message:''
    };
    
}



componentDidMount = ()=>{
  fetch(configs.baseurl+'school/class',{
      method:'get',
      headers:{
          'auth':localStorage.getItem('token')
      }
  }).then(res=>{
      status1 = res.status
      return res.json()
  })
  .then(data=>{
      if(status1 === 200 || status1 === 201){
          data.sort((a, b) => a.classname - b.classname);
          this.setState({classes:data});
      }
  })
}

addStudent= ()=>{
  const formData = new FormData();

  formData.append('name',this.state.studentName);
  formData.append('email',this.state.email);
  formData.append('role','Student');
  formData.append('image', this.state.image, this.state.image.name);
  formData.append('password',this.state.password);

  formData.append('address1',this.state.address1);
  formData.append('address2',this.state.address2);
  formData.append('address3',this.state.address3);
  formData.append('city', this.state.city);
  formData.append('state',this.state.state);
  formData.append('zip',this.state.zip);

  formData.append('classid',this.state.class);
  formData.append('fathername',this.state.fatherName);
  formData.append('mothername', this.state.motherName);
  formData.append('mobileno1',this.state.mobileNo1);
  formData.append('mobileno2',this.state.mobileNo2);
  formData.append('addmissiondate',this.state.admissionDate);
  formData.append('dob',this.state.dob);
  formData.append('srno',this.state.srno);
  formData.append('promotedclassid', this.state.class);

  fetch(config.baseurl+'school/register/student',{
    method:'post',
    headers:{
      'auth':localStorage.getItem('token')
    },
    body: formData
  })
  .then(res=>{
    status2 =  res.status;
    return res.json();
  })
  .then(data =>{
    if(status2 === 200 || status2 === 201){
      this.setState({error:false,success:true ,message : "Successfully created"});
    }
    else{
      this.setState({error:true,success:false, message:JSON.stringify(data)});
    }
  }).catch(err=>{
    this.setState({error:true,success:false, message:JSON.stringify(err)});
  })
}

render(){
  if(localStorage.getItem('role')!=='School' && ! this.state.redirect){
    localStorage.removeItem('token');
    localStorage.removeItem('image');
    localStorage.removeItem('role');
    this.setState({redirect:true});
  }


    return(<>
      <Container-Fluid>
        {this.state.redirect ? <Redirect to = '/' />:null}
        <SchoolNav/>
        {this.state.classes ? 
        <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-5 border border-primary">
          {this.state.error?<div className="alert alert-danger" role="alert">{this.state.message}</div> :(this.state.success ? <div className="alert alert-primary" role="alert">{this.state.message}</div>:null)}
          <div className="border-primary d-flex flex-column mt-5">
              <div className="row mt-4 ">
                <span className="col-5">Student Name</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" onChange={(event)=>{this.setState({studentName:event.target.value})}} />
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Father Name</span>
                <input type ="text" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({fatherName:event.target.value})}} />
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Mother Name</span>
                <input type ="text" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({motherName:event.target.value})}} />
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Mobile No 1</span>
                <input type ="text" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({mobileNo1:event.target.value})}} />
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Mobile No 2</span>
                <input type ="text" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({mobileNo2:event.target.value})}}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Address Line 1</span>
                <input type ="text" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({address1:event.target.value})}}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Address Line 2</span>
                <input type ="text" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({address2:event.target.value})}}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Address Line 3</span>
                <input type ="text" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({address3:event.target.value})}}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">City</span>
                <input type ="text" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({city:event.target.value})}}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">State</span>
                <input type ="text" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({state:event.target.value})}}/>
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Pin Code</span>
                <input type ="text" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({zip:event.target.value})}}/>
              </div>
              <div className="row mt-4">
                <span className="col-5">Email</span>
                <input type ="text" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({email:event.target.value})}}/>
              </div>
              <div className="row mt-4">
                <span className="col-5">Password</span>
                <input type ="text" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({password:event.target.value})}}/>
              </div>
              <div className="row mt-4">
                <span className="col-5">Image</span>
                <input type ="file" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({image:event.target.files[0]})}}/>
              </div>
              <div className="row mt-4">
                <span className="col-5">DOB</span>
                <input type ="date" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({dob:event.target.value})}}/>
              </div>
              <div className="row mt-4">
                <span className="col-5">Srno</span>
                <input type ="text" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({srno:event.target.value})}}/>
              </div>
              <div className="row mt-4">
                <span className="col-5">Class</span>
                  <select className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({class:event.target.value})}}>
                    <option value="---">---</option>
                    {this.state.classes.map((classinfo,index)=>
                        <option value={classinfo.id} key={index}>{classinfo.classname +" "+ classinfo.section} </option>
                    )}
                  </select>
              </div>
              <div className="row mt-4">
                <span className="col-5">Admission Date</span>
                <input type ="date" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({admissionDate:event.target.value})}}/>
              </div>
              <div className="row mt-4">
                <button className="sm-ml-5 col-5 mr-2 form-control btn btn-primary" onClick={this.addStudent}>Submit</button>
                <button className="sm-ml-2 col-5 form-control btn btn-danger" onClick={()=>window.location.reload(true)}>Cancel</button>
              </div>
          </div>
        </div>:<>Kindly Add some classes</>}
      </Container-Fluid>
      </>
    );
}
}
export default AddStudent;
           