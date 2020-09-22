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

updateTest=()=>{
    fetch(config.baseurl+'testapp/tests/update',{
        method:'post',
        headers:{
            'Content-Type':'application/json',
            'auth':localStorage.getItem('token')
        },
        body:JSON.stringify({testid:this.state.id,testname:this.state.testname, duration:this.state.duration, status: this.state.status, expiredate: this.state.expiredate})
    }).then(res=>{
        return res.json();
    })
    .then(data=>{
        this.setState({edit:false});
    })
}

deleteQuestion = ()=>{
    fetch(config.baseurl+'testapp/tests/question/update',{
        method:'put',
        headers:{
            'Content-Type':'application/json',
            'auth':localStorage.getItem('token')
        },
        body:JSON.stringify({id:this.state.id})
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
            <div className="row mt-4 mr-4 ml-4">
                <span className="col">{this.state.question}</span>
                <span className="col">{this.state.questiontype}</span>
                <span className="col">{this.state.marks}</span>
                <span className="col">{this.state.option1}</span>
                <span className="col">{this.state.option2}</span>
                <span className="col">{this.state.option3}</span>
                <span className="col">{this.state.option4}</span>
                <span className="col">{this.state.answer}</span>
                <div className="col">
                    {/* <button className="btn btn-warning" onClick={()=>this.setState({edit:true})}>Edit</button> */}
                    <button className="btn btn-danger mt-2" onClick={this.deleteQuestion}>Delete</button>
                </div>
            </div>
            </>
            
            );
}
}
export default ViewQuestion;
           