import React from 'react';
import SchoolNav from './components/schoolnav';
import configs from './../config';
let status = ''

class AddSubject extends React.Component{
    constructor() {
        super();
        this.state = {
            classes : null,
            subjectname:null,
            classid:null
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
        return(
            <Container-Fluid>
              <SchoolNav/>
              {this.state.classes ? 
              <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5 pb-5">
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
              
          );
    };
    
  }
export default AddSubject;