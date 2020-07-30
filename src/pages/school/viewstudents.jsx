import React from 'react';
import SchoolNav from './components/schoolnav';
import StudentCard from './components/studentcard';
import configs from './../config';
let status = '';
class ViewStudents extends React.Component{

    constructor() {
        super();
        this.state = {
            classes : null,
            selectedClass : null,
            students : null
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

    handleClassSelect = (event)=>{
        this.setState({selectedClass:event.target.value});
    };

    getStudents = ()=>{
        fetch(configs.baseurl+'school/class/students',{
            method:'post',
            headers:{'Content-Type': 'application/json',
            'auth':localStorage.getItem('token')
            },
            body:JSON.stringify({classid:this.state.selectedClass})
        }).then(res=>{
            status = res.status;
            return res.json();
        })
        .then(data=>{
            if(status ===200 || status === 201){
                this.setState({students: data});
            }
        })
    }

    render(){
            return(
                <Container-Fluid>
                <SchoolNav />
                {this.state.classes ? 
                <>
                <div className="d-flex flex-row flex-wrap container align-self-center shadow mt-5 mb-5 pb-5">
                    <span className="mt-5">Select you class </span>
                        <select className=" ml-2 mt-5 custom-select col-md-3" onChange={this.handleClassSelect}>
                            <option value="---">---</option>
                            {this.state.classes.map((classinfo,index)=>
                                <option value={classinfo.id} key={index}>{classinfo.classname +" "+ classinfo.section} </option>
                            )}
                            
                        </select>
                        <button className="ml-2 mt-5 btn btn-primary col-2" onClick={this.getStudents}>Show Students</button>
                    </div>
                    {this.state.students ?
                    <div className="d-flex align-content-center align-self-center flex-row flex-wrap container shadow mt-5 mb-5 pb-5">
                       {this.state.students.map((studentinfo, index)=>
                        <StudentCard studentinfo ={studentinfo}/>
                       )} 
                    </div>
                    :<div>Students not found</div>}
                        
                </>
                :<div>Kindly add a class then you can view students</div>}
                </Container-Fluid>
            
            );
        }
}
export default ViewStudents;