import React from 'react';
import {Redirect} from 'react-router-dom';
import SchoolNav from './components/schoolnav';
import configs from './../config';
import config from './../config';
let status = ''

class AddVideo extends React.Component{
    constructor() {
        super();
        this.state = {
            classes : null,
            subjects:null,
            subjectid:null,
            chaptername:null,
            videolink:null,
            redirect:false
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

    handleClassChange = (classid)=>{
        fetch(config.baseurl +'school/class/subject',{
            method:'post',
            headers:{
                'Content-Type':'application/json',
                'auth':localStorage.getItem('token')
            },
            body: JSON.stringify({classid:classid})
        }).then(res=>{
            status = res.status;
            return res.json();
        }).then(data=>{
            if(status === 200 || status ===201){
                this.setState({subjects: data});
            }
            else{
                console.log("err"+data)
            }
        })

    }

    

    addVideo =()=>{
        fetch(configs.baseurl+'school/school/education',{
            method:'post',
            headers:{
                'auth':localStorage.getItem('token'),
                'Content-Type':'application/json'
            },
            body: JSON.stringify({subjectid:this.state.subjectid,chaptername:this.state.chaptername, videolink:this.state.videolink})
        })
        .then(res =>{
            status =  res.status;
            return res.json();
        })
        .then(data=>{
            if(status ===200 || status ===201){
                console.log('created')
            }
            else{
                console.log('error')
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

        return(<>{this.state.redirect?<Redirect to = '/' />:null}
            <Container-Fluid>
              <SchoolNav/>
              {this.state.classes ? 
              <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-5 border border-success">
                <div className="border-primary d-flex flex-column mt-5">
                    <div className="row mt-4">
                        <span className="col-5">Class</span>
                        <select className="sm-ml-5 col-7 form-control"  onChange={(event)=> this.handleClassChange(event.target.value)}>
                        <option value="---">---</option>
                            {this.state.classes.map((classinfo,index)=>
                                <option value={classinfo.id} key={index}>{classinfo.classname +" "+ classinfo.section} </option>
                            )}
                        </select>
                    </div>
                    <div className="row mt-4">
                        <span className="col-5">Subject  </span>
                        <select className="sm-ml-5 col-7 form-control"  onChange={(event)=>this.setState({subjectid:event.target.value})}>
                        <option value="---">---</option>
                            { this.state.subjects ? this.state.subjects.map((subject,index)=>
                                <option value={subject.id} key={index}>{subject.subjectname} </option>
                            ) : null}
                        </select>
                    </div>
                    {(this.state.subjects && this.state.subjects.length >0)? 
                    <>
                        <div className="row mt-4">
                            <span className="col-5">Chapter Name</span>
                            <input type ="text" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({chaptername:event.target.value})}}/>
                        </div>
                        <div className="row mt-4">
                            <span className="col-5">video Link</span>
                            <input type ="text" className="sm-ml-5 col-7 form-control"  onChange={(event)=>{this.setState({videolink:event.target.value})}}/>
                        </div>
                    </>
                    :null}
                    <div className="row mt-4">
                      <button className="sm-ml-5 col-5 mr-2 form-control btn btn-primary" onClick={this.addVideo}>Submit</button>
                      <button className="sm-ml-2 col-5 form-control btn btn-danger" onClick={()=>window.location.reload(true)}>Cancel</button>
                    </div>
                </div>
                </div> :<>Kindly Add Some classes </>}
            </Container-Fluid> 
              </>
          );
    };
    
  }
export default AddVideo;