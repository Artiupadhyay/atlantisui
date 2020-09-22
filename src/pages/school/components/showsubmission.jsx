import React from 'react';
import config from './../../config';
import {Modal, Button} from 'react-bootstrap';
import OpenQuestion from './openquestion';
export default class ShowSubmission extends React.Component {
  constructor(props){
    super();
    this.state={
      show:false,
      ...props
    }
  };

  getSubmission=()=>{
    fetch(config.baseurl+'testapp/all/student/submission',{
      method:'post',
      headers:{
        'Content-Type':'application/json',
        'auth':localStorage.getItem('token')
      },
      body:JSON.stringify({testid:this.state.id, classid: this.state.classid})
    }).then(res=>res.json())
    .then(data=>{
      this.setState({students: data, show: true, showModel: '1'});
    })
  }

  getStudentSubmission=(testid, userid)=>{
    fetch(config.baseurl+'testapp/student/submission',{
        method:'post',
        headers:{
          'Content-Type':'application/json',
          'auth':localStorage.getItem('token')
        },
        body:JSON.stringify({testid:testid, userid: userid})
      }).then(res=>res.json())
      .then(data=>{
        this.setState({studentSubmission: data, showModel: '2', selectedUserId:userid});
      })
    }


  render(){
    return (
      <>
        <Button variant="primary" onClick={this.getSubmission}>
          Show Submission
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
          {(this.state.students && this.state.showModel === '1')?<>
          <Modal.Header closeButton>
            <Modal.Title>Student Submission for {this.state.testname}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-4">
              {this.state.students.map((student, index)=>{
                  return (
                        <div className="row mt-4 " key={index}>
                            <span className="col">{student.name}</span>
                            <span className="col">{student.result}</span>
                            <button className="col btn btn-warning" onClick={()=>this.getStudentSubmission(this.state.id, student.id)}>View Submission</button>
                        </div>
                  )
              })}
              
              
              
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>this.setState({show:false})}>
              Close
            </Button>
          </Modal.Footer></>:(this.state.showModel === '2')?
          <><Modal.Header closeButton>
          <Modal.Title>Student Submission for {this.state.testname}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
            {this.state.studentSubmission.map((question, index)=><OpenQuestion {...question} selectedUserId={this.state.selectedUserId} key={index} />)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>this.setState({show:false})}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> this.setState({showModel:'1'})}>Back</Button>
        </Modal.Footer></>
          :null}
        </Modal>
      </>
    );
  }
}