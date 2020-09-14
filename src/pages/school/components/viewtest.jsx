import React from 'react';
import config from './../../config';
    

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
            <>
            {this.state.edit?
            <div className="row mt-4 mr-4 ml-4">
                <div className="col">
                    <input type ="date" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({expiredate:event.target.value})}} value={this.state.duration}/>
                </div>
                <div className="col">
                    <select className="sm-ml-5 col-7 form-control"  onChange={(event)=>this.setState({duration:event.target.value})}>
                            <option value="0">---</option>
                            <option value="15">15 Minutes</option>
                            <option value="30">30 Minutes</option>
                            <option value="45">45 Minutes</option>
                            <option value="60">60 Minutes</option>
                            <option value="75">1 Hour 15 Minutes</option>
                            <option value="90">1 Hour 30 Minutes</option>
                    </select>
                </div>
                <div className="col">
                    <input type ="text" className="sm-ml-5 col-7 form-control" onChange={(event)=>this.setState({testname:event.target.value})} value={this.state.testname}/>
                </div>
                <div className="col">
                    <select className="sm-ml-5 col-7 form-control"  onChange={(event)=>this.setState({status:event.target.value})}>
                        <option value="---">--</option>
                        <option value="Draft">Draft</option>
                        <option value="Published">Published</option>
                        <option value="Expired">Expired</option>
                    </select>
                </div>
                <div className="col">
                    <button className="btn btn-success mr-2" onClick={this.updateTest}>Save</button>
                    <button className="btn btn-danger ml-2" onClick={()=>this.setState({edit:false})}>Cancel</button>
                </div>
            </div>
            :
            <div className="row mt-4 mr-4 ml-4">
                <span className="col">{this.state.expiredate}</span>
                <span className="col">{this.state.duration}</span>
                <span className="col">{this.state.testname}</span>
                <span className="col">{this.state.status}</span>
                {this.state.status !=="Expired" ?<button className="col btn btn-warning" onClick={()=>this.setState({edit:true})}>Edit</button>:null}
            </div>}
            </>
            
            );
}
}
export default ViewTest;
           