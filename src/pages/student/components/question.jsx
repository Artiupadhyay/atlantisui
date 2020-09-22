import React from 'react';
import config from './../../config';
    

class ViewQuestion extends React.Component {
  
  constructor(props) {
    super();
    this.state = {
        ...props
    };
    
}

componentWillReceiveProps(nextprops) {
    if(nextprops.id){
        this.setState({ ...nextprops });  
    }
    
  }

submitQuestion=(answer)=>{
    fetch(config.baseurl+'student/question',{
        method:'post',
        headers:{
            'Content-Type':'application/json',
            'auth':localStorage.getItem('token')
        },
        body:JSON.stringify({id:this.state.id, answer: answer})
    }).then(res=>{
        return res.json();
    })
    .then(data=>{
        console.log(data)
    })
}



render(){
    return(
            <div className="d-flex flex-column justify-content-start mt-4 mr-4 ml-4">
                <span className="row">{this.state.question}</span>
                {this.state.questiontype === "Objective"?<>
                <div className="d-flex flex-row align-items-center">
                    <span>(A). </span>
                    <input type="radio" className= "ml-1 mr-2" name={this.state.id} value={this.state.option1} onClick={(event)=>{this.submitQuestion(event.target.value)}}/>
                    <span>{this.state.option1}</span>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <span>(B). </span>
                    <input type="radio" className= "ml-1 mr-2" name={this.state.id} value={this.state.option2} onClick={(event)=>{this.submitQuestion(event.target.value)}}/>
                    <span>{this.state.option2}</span>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <span>(C). </span>
                    <input type="radio" className= "ml-1 mr-2" name={this.state.id} value={this.state.option3} onClick={(event)=>{this.submitQuestion(event.target.value)}}/>
                    <span>{this.state.option3}</span>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <span>(D). </span>
                    <input type="radio" className= "ml-1 mr-2" name={this.state.id} value={this.state.option4} onClick={(event)=>{this.submitQuestion(event.target.value)}}/>
                   <span>{this.state.option4}</span>
                </div>
                </>:<> <textarea type="text" className="row mt-4" onChange={(event)=>this.setState({answer:event.target.value})} />
                <button className="col-6 btn btn-success mt-4" onClick={(event)=>this.submitQuestion(this.state.answer)}>Submit Answer</button>
                </>}
            </div>
            );
}
}
export default ViewQuestion;
           