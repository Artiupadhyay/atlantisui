import React from 'react';
import {Redirect} from 'react-router-dom'
import SchoolNav from './components/schoolnav';
import configs from '../config';
import TestView from './components/TestView';
let status = '';
class TestViewForQuestion extends React.Component{

    constructor() {
        super();
        this.state = {
            status:"Draft"
        };
    }

    

    componentWillMount = ()=>{
        fetch(configs.baseurl+'school/class',{
            method:'get',
            headers:{
                'auth':localStorage.getItem('token')
            }
        }).then(res=>{
            status = res.status
            return res.json()
        })
        .then(data=>{
            if(status === 200 || status === 201){
                data.sort((a, b) => a.classname - b.classname);
                this.setState({classes:data});
            }
        })
    }

    handleClassSelect = (event)=>{
        this.setState({selectedClass:event.target.value});
    };

    getTests = ()=>{
        fetch(configs.baseurl+'testapp/tests/',{
            method:'put',
            headers:{'Content-Type': 'application/json',
            'auth':localStorage.getItem('token')
            },
            body:JSON.stringify({classid:this.state.classid, status: this.state.status})
        }).then(res=>{
            status = res.status;
            return res.json();
        })
        .then(data=>{
            if(status === 200 || status === 201){
                this.setState({tests: data});
            }
        })
    }

    render(){
        if(localStorage.getItem('role')!=='School' && ! this.state.redirect){
            localStorage.removeItem('token');
            localStorage.removeItem('image');
            localStorage.removeItem('role');
            this.setState({redirect:true});
          }
            return(
                <>
                {this.state.redirect?<Redirect to = '/' />:null}
                <Container-Fluid>
                <SchoolNav />
                {this.state.classes ? 
                <>
                <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-5 border border-success">
              
                    <div className="border-primary d-flex flex-column mt-5">
                    
                        <div className="row mt-4">
                            <span className="col-5">Class</span>
                            <select className="sm-ml-5 col-7 form-control"  onChange={(event)=>this.setState({classid:event.target.value})}>
                            <option value="---">---</option>
                                {this.state.classes.map((classinfo,index)=>
                                    <option value={classinfo.id} key={index}>{classinfo.classname +" "+ classinfo.section} </option>
                                )}
                            </select>
                        </div>
                        <button className="btn btn-primary mx-auto mt-3" onClick={this.getTests}>Get Tests</button>
                    </div>
                    </div>
                    {this.state.tests ?
                    <div className="container shadow mt-5 mb-5 pb-5">
                        <div className="row mt-4 mr-4 ml-4">
                            <span className="col">Expire Date</span>
                            <span className="col">Duration</span>
                            <span className="col">Test Name</span>
                            <span className="col">Total Question</span>
                            <div className="col">
                            </div>
                        </div>
                       {this.state.tests.map((test, index)=>
                        <TestView {...test} key={index}/>
                       )} 
                    </div>
                    :null}
                        
                </>
                :<div>Kindly add a class then you can view students</div>}
                </Container-Fluid>
            </>
            );
        }
}
export default TestViewForQuestion;