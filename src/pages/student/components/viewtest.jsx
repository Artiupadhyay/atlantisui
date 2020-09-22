import React from 'react';
import config from './../../config';
import ViewQuestion from './question';
    

class ViewTest extends React.Component {
  
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

taketest=()=>{
    fetch(config.baseurl+'testapp/tests/question',{
        method:'put',
        headers:{
            'Content-Type':'application/json',
            'auth':localStorage.getItem('token')
        },
        body:JSON.stringify({testid:this.state.id})
    }).then(res=>{
        return res.json();
    })
    .then(data=>{
        this.setState({questions:data, taketest:true});
    })
}

submitTest=()=>{
    fetch(config.baseurl+'student/test/submit',{
        method:'post',
        headers:{
            'Content-Type':'application/json',
            'auth':localStorage.getItem('token')
        },
        body:JSON.stringify({testid:this.state.id})
    }).then(res=>{
        return res.json();
    })
    .then(data=>{
        alert(data.message);
        this.setState({taketest:false})
    })
}



render(){
    return(
            <>
            {this.state.taketest?
            <>
            <div className="row">
                <h3 className="col">Test Name :- {this.state.testname}</h3>
                
            </div>
            {this.state.questions.map((question, index)=> <ViewQuestion {...question} key={index}/>)}
            <button className="col btn btn-success" onClick={this.submitTest}>Submit Test</button>
            </>
            :
            <div className="row mt-4 mr-4 ml-4">
                <span className="col">{this.state.expiredate}</span>
                <span className="col">{this.state.duration}</span>
                <span className="col">{this.state.testname}</span>
                <span className="col">{this.state.status}</span>
            <button className="col btn btn-success" onClick={this.taketest}>Take Test</button>
            </div>}
            </>
            
            );
}
}
export default ViewTest;
           