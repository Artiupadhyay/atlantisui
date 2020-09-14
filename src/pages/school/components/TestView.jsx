import React from 'react';
import config from './../../config';
import AddQuestion from './addquestion';
import ViewQuestions from './viewquestions';
    

class TestView extends React.Component {
  
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

componentWillMount(){
    fetch(config.baseurl+"testapp/tests/get/question/count",{
        method:"post",
        headers:{
            'Content-Type':'application/json',
            'auth':localStorage.getItem('token')
        },
        body:JSON.stringify({testid:this.state.id})
    }).then(res=>{
        return res.json();
    })
    .then(data=>{
        this.setState({count:data.count})
    })
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


render(){
    return(
            <div className="row mt-4 mr-4 ml-4">
                <span className="col">{this.state.expiredate}</span>
                <span className="col">{this.state.duration}</span>
                <span className="col">{this.state.testname}</span>
                <span className="col">{this.state.count}</span>
                <div className="col">
                    <AddQuestion id={this.state.id} name={this.state.testname}/>
                    <ViewQuestions id={this.state.id} name={this.state.testname}/>
                </div>
            </div>
            );
}
}
export default TestView;
           