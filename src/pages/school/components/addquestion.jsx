import React from 'react';
import config from './../../config';
import {Modal, Button} from 'react-bootstrap';
export default class AddQuestion extends React.Component {
  constructor(props){
    super();
    this.state={
      show:false,
      ...props,
      option1:null,
      option2:null,
      option3:null,
      option4:null,
      option5:null,
      answer:null,
    }
  };

  addQuestion=()=>{

    fetch(config.baseurl+'testapp/tests/question',{
      method:'post',
      headers:{
        'auth':localStorage.getItem('token'),
        'Content-Type':'application/json'
      },
      body:JSON.stringify({testid:this.state.id, question:this.state.question,
         questiontype: this.state.questiontype,option1:this.state.option1,
         option2:this.state.option2, option3:this.state.option3, option4:this.state.option4,
         answer:this.state.answer, marks:this.state.marks
        })
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
          Add
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
            <Modal.Title>Add Question To {this.state.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-4">
              <div className="row mt-4 ">
                <span className="col-5">Question</span>
                <input type ="text" className="sm-ml-5 col-7 form-control" value={this.state.question?this.state.question:""} onChange={(event)=>{this.setState({question:event.target.value})}} />
              </div>
              <div className="row mt-4 ">
                <span className="col-5">Questiontype</span>
                <select className="sm-ml-5 col-7 form-control"  onChange={(event)=>this.setState({questiontype:event.target.value})}>
                    <option value="---">---</option>
                    <option value="Subjective">Subjective</option>
                    <option value="Objective"  selected = {this.state.questiontype ==="Objectvie"? true:false}>Objective</option>
                </select>
              </div>
                <div className="row mt-4 ">
                    <span className="col-5">Marks</span>
                    <input type ="text" className="sm-ml-5 col-7 form-control" placeholder="Option1" value={this.state.marks?this.state.marks:"0"}  onChange={(event)=>{this.setState({marks:event.target.value})}} />
                </div>
              {this.state.questiontype === "Objective"?
              <>
                <div className="row mt-4 ">
                    <span className="col-5">Option1</span>
                    <input type ="text" className="sm-ml-5 col-5 form-control" placeholder="Option1" value={this.state.option1?this.state.option1:""}  onChange={(event)=>{this.setState({option1:event.target.value})}} />
                    <input type="radio" className= "col-2" name="answer" value={this.state.option1?this.state.option1:""} onClick={(event=>{this.setState({answer:event.target.value})})} />
                </div>
                <div className="row mt-4 ">
                    <span className="col-5">Option1</span>
                    <input type ="text" className="sm-ml-5 col-5 form-control" placeholder="Option2" value={this.state.option2?this.state.option2:""}  onChange={(event)=>{this.setState({option2:event.target.value})}} />
                    <input type="radio" className= "col-2" name="answer" value={this.state.option2?this.state.option2:""} onClick={(event=>{this.setState({answer:event.target.value})})}/>
                </div>
                <div className="row mt-4 ">
                    <span className="col-5">Option1</span>
                    <input type ="text" className="sm-ml-5 col-5 form-control" placeholder="Option3" value={this.state.option3?this.state.option3:""}  onChange={(event)=>{this.setState({option3:event.target.value})}} />
                    <input type="radio" className= "col-2" name="answer" value={this.state.option3?this.state.option3:""} onClick={(event=>{this.setState({answer:event.target.value})})} />
                </div>
                <div className="row mt-4 ">
                    <span className="col-5">Option1</span>
                    <input type ="text" className="sm-ml-5 col-5 form-control" placeholder="Option4" value={this.state.option4?this.state.option4:""}  onChange={(event)=>{this.setState({option4:event.target.value})}} />
                    <input type="radio" className= "col-2" name="answer" value={this.state.option4?this.state.option4:""} onClick={(event=>{this.setState({answer:event.target.value})})} />
                </div>
                </>
              :null}              
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>this.setState({show:false})}>
              Close
            </Button>
            <Button variant="primary" onClick={this.addQuestion}>Add</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}