import React from 'react';
import config from './../../config';
import {Modal, Button} from 'react-bootstrap';
import ViewQuestion from './viewquestion';
export default class ViewQuestions extends React.Component {
  constructor(props){
    super();
    this.state={
      show:false,
      ...props,
    }
  };

  getQuestions=()=>{
    fetch(config.baseurl+'testapp/tests/question',{
      method:'put',
      headers:{
        'auth':localStorage.getItem('token'),
        'Content-Type':'application/json'
      },
      body:JSON.stringify({testid:this.state.id
        })
    }).then(res=>res.json())
    .then(data=>{
     this.setState({questions:data, show:true})
    })
  }
  render(){
      console.log(this.state);
    return (
      <>
        <Button variant="secondary ml-2" onClick={this.getQuestions}>
          View
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
            <Modal.Title>Questions of {this.state.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-4">
            {this.state.questions?
            this.state.questions.map((question, index)=><ViewQuestion {...question}/>)
            :null}   
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>this.setState({show:false})}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}