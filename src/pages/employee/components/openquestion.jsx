import React from 'react';
import config from './../../config';
    

class OpenQuestion extends React.Component {
  
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

updateSubmission=()=>{
    fetch(config.baseurl+'testapp/student/submission',{
        method:'put',
        headers:{
            'Content-Type':'application/json',
            'auth':localStorage.getItem('token')
        },
        body:JSON.stringify({testid:this.state.testid,userid:this.state.selectedUserId,questionid: this.state.id, mark: this.state.mark})
    }).then(res=>{
        return res.json();
    })
    .then(data=>{
        this.setState({edit:false});
    })
}

render(){
    return(
            <>
            {this.state.questiontype !== 'Subjective'?(this.state.status==='Wrong'?
            <div className="pt-4 pr-4 pl-4" style={{backgroundColor:"#ffbfbf"}}>
            <div className="row"><span className="col-10">{this.state.question}</span><span className="col-2">MM - {this.state.marks}</span></div>
            <span className="row">(A) {this.state.option1}</span>
            <span className="row">(B) {this.state.option2}</span>
            <span className="row">(C) {this.state.option3}</span>
            <span className="row">(D) {this.state.option4}</span>
            <span className="row">Correct Answer :- {this.state.answer}</span>
            <span className="row">Submitted Answer :- {this.state.submission}</span>
            </div>
            :
            <div className="pt-4 pr-4 pl-4" style={{backgroundColor:"#bbfac3"}}>
            <div className="row"><span className="col-10">{this.state.question}</span><span className="col-2">MM - {this.state.marks}</span></div>
            <span className="row">(A) {this.state.option1}</span>
            <span className="row">(B) {this.state.option2}</span>
            <span className="row">(C) {this.state.option3}</span>
            <span className="row">(D) {this.state.option4}</span>
            <span className="row">Correct Answer :- {this.state.answer}</span>
            <span className="row">Submitted Answer :- {this.state.submission}</span>
            </div>
            ):

            <div className="pt-4 pr-4 pl-4 m-4">
            <div className="row"><span className="col-10">{this.state.question}</span><span className="col-2">MM - {this.state.marks}</span></div>
            <span className="row">Submitted Answer :- {this.state.submission}</span>
            <input type="text" className="row mt-4" onChange={(event)=>this.setState({mark: event.target.value})}/>
            <div className="row mt-4">
                <button className="btn btn-warning" onClick={this.updateSubmission}>Update Subjective mark</button>
            </div>
            </div>

            }
           
            </>
            
            );
}
}
export default OpenQuestion;
           