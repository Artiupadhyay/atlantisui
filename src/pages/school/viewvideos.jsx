import React from 'react';
import SchoolNav from './components/schoolnav';
import configs from '../config';
import config from '../config';
import VideoCard from './components/videocard';
let status = ''

class ViewVideos extends React.Component{
    constructor() {
        super();
        this.state = {
            classes : null,
            subjects:null,
            videos:null,
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
            console.log(data)
            if(status ===200 || status ===201){
                this.setState({videos:data});
            }
            else{
                console.log("error =>"+data);
            }
        })
    }


    render(){
        return(
            <Container-Fluid>
              <SchoolNav/>
              {this.state.classes ? 
              <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-5">
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
                        <select className="sm-ml-5 col-7 form-control"  onChange={(event)=>this.handleSubjectChange(event.target.value)}>
                        <option value="---">---</option>
                            { this.state.subjects ? this.state.subjects.map((subject,index)=>
                                <option value={subject.id} key={index}>{subject.subjectname} </option>
                            ) : null}
                        </select>
                    </div>
                </div>
                </div> :<>Kindly Add Some classes </>}
                {this.state.videos ?
                
                    <div className="d-flex align-content-center align-self-center flex-row flex-wrap container shadow mt-5 mb-5 pb-5">
                       {this.state.videos.map((videoinfo, index)=>
                        <VideoCard videoinfo ={videoinfo} key={index}/>
                       )} 
                    </div>
                   
                :"Select other subject"}
            </Container-Fluid> 
              
          );
    };
    
  }
export default ViewVideos;