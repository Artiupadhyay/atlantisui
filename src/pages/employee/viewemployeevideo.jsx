import React from 'react';
import {Redirect}  from 'react-router-dom';
import EmployeeNavbar from './components/employeenavbar';
import configs from '../config';
import VideoCard from './components/videocard';
let status = ''

class ViewEmployeeVideo extends React.Component{
    constructor() {
        super();
        this.state = {
            classes : null,
            subjects:null,
            videos:null,
            redirect:false
        };
    }

    componentDidMount =()=>{
        fetch(configs.baseurl+'employee/subject',{
            method:'get',
            headers:{
                'auth':localStorage.getItem('token')
                }
        })
        .then(res =>{
            status =  res.status;
            return res.json();
        })
        .then(data=>{
            if(status ===200 || status ===201){
                data.sort((a, b) => a.classname - b.classname);
                this.setState({subjects:data});
            }
            else{
                console.log('error')
            }
        })
    }

    
    handleSubjectChange =(subjectid)=>{
        fetch(configs.baseurl+'school/get/subject/video',{
            method:'post',
            headers:{
                'auth':localStorage.getItem('token'),
                'Content-Type':'application/json'
            },
            body: JSON.stringify({subjectid:subjectid})
        })
        .then(res =>{
            status =  res.status;
            return res.json();
        })
        .then(data=>{
            if(status ===200 || status ===201){
                this.setState({videos:data});
            }
            else{
                console.log("error =>"+data);
            }
        })
    }


    render(){

        // if(localStorage.getItem('role')!=='School' && ! this.state.redirect){
        //     localStorage.removeItem('token');
        //     localStorage.removeItem('image');
        //     localStorage.removeItem('role');
        //     this.setState({redrect:true});
        // }

        return(
            <>
            {this.state.redirect?<Redirect to = '/' />:null}
            
            <Container-Fluid>
              <EmployeeNavbar/>
              {this.state.subjects ? 
              <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-5">
                <div className="border-primary d-flex flex-column mt-5">
                   
                    <div className="row mt-4">
                        <span className="col-5">Subject  </span>
                        <select className="sm-ml-5 col-7 form-control"  onChange={(event)=>this.handleSubjectChange(event.target.value)}>
                        <option value="---">---</option>
                            { this.state.subjects ? this.state.subjects.map((subject,index)=>
                                <option value={subject.id} key={index}>{subject.subjectname} </option>
                            ) : null}
                        </select>
                    </div>
                </div>
                </div> :<>Kindly Add Some subjects </>}
                {this.state.videos ?
                
                    <div className="d-flex align-content-center align-self-center flex-row flex-wrap container shadow mt-5 mb-5 pb-5">
                       {this.state.videos.map((videoinfo, index)=>
                        <VideoCard videoinfo ={videoinfo} key={index}/>
                       )} 
                    </div>
                   
                :"Select other subject"}
            </Container-Fluid> 
              </>
          );
    };
    
  }
export default ViewEmployeeVideo;