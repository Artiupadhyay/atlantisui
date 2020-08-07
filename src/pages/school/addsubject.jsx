import React from 'react';
import SchoolNav from './components/schoolnav';
import configs from './../config';
import {Redirect} from 'react-router-dom';
let status = ''
let status2 = ''

class AddSubject extends React.Component{
    constructor() {
        super();
        this.state = {
            classes : null,
            subjectname:null,
            classid:null,
            redirect: false
        };
    }

    componentDidMount = ()=>{
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

    addSubject =()=>{
        fetch(configs.baseurl+'school/subject',{
            method:'post',
            headers:{
                'auth':localStorage.getItem('token'),
                'Content-Type':'application/json'
            },
            body: JSON.stringify({subjectname:this.state.subjectname,classid:this.state.classid})
        })
        .then(res =>{
            status2 =  res.status;
            return res.json();
        })
        .then(data=>{
            if(status2 === 200 || status2 === 201){
                this.setState({error:false,success:true ,message : "Successfully created"});
              }
              else{
                this.setState({error:true,success:false, message:JSON.stringify(data)});
              }
            }).catch(err=>{
              this.setState({error:true,success:false, message:JSON.stringify(err)});
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
              <SchoolNav/>
              {this.state.classes ? 
              <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-5 border border-success">
                 {this.state.error?<div className="alert alert-danger" role="alert">{this.state.message}</div> :(this.state.success ? <div className="alert alert-primary" role="alert">{this.state.message}</div>:null)}
                <div className="border-primary d-flex flex-column mt-5">
                    <div className="row mt-4 ">
                        <span className="col-5">Subject Name</span>
                        <input type ="text" className="sm-ml-5 col-7 form-control" onChange={(event)=>this.setState({subjectname:event.target.value})}/>
                    </div>
                    <div className="row mt-4">
                        <span className="col-5">Class</span>
                        <select className="sm-ml-5 col-7 form-control"  onChange={(event)=>this.setState({classid:event.target.value})}>
                        <option value="---">---</option>
                            {this.state.classes.map((classinfo,index)=>
                                <option value={classinfo.id} key={index}>{classinfo.classname +" "+ classinfo.section} </option>
                            )}
                        </select>
                    </div>
                    <div className="row mt-4">
                      <button className="sm-ml-5 col-5 mr-2 form-control btn btn-primary" onClick={this.addSubject}>Submit</button>
                      <button className="sm-ml-2 col-5 form-control btn btn-danger" onClick={()=>window.location.reload(true)}>Cancel</button>
                    </div>
                </div>
                </div> :<>Kindly Add Some classes </>}
            </Container-Fluid> 
              </>
          );
    };
    
  }
export default AddSubject;