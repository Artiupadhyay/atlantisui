import React from 'react';
import config from './../../config';

class ViewSubjectCard extends React.Component{

    constructor(props) {
        super();
        this.state = {
            classinfo: null
        };
    }
    componentDidMount=()=>{
        this.setState({classinfo:this.props});
    }

    deleteClass=(classid)=>{
        fetch(config.baseurl+'auth/delete/class',{
            method:'post',
            headers:{
                'Content-Type':'application/json',
                'auth':localStorage.getItem('token')
            },
            body:JSON.stringify({id:classid})
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    deleteSubject=(subjcetId)=>{
        fetch(config.baseurl+'auth/delete/subject',{
            method:'post',
            headers:{
                'Content-Type':'application/json',
                'auth':localStorage.getItem('token')
            },
            body:JSON.stringify({id:subjcetId})
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    render(){
            return(<>
                {this.state.classinfo ?
                <div className="card text-white bg-info mb-3 mr-auto ml-3 mt-4 border border-success" style={{maxWidth: "18rem"}}>
                        <div className="card-header">
                            <span>{this.state.classinfo.classname + " " + this.state.classinfo.section}
                            </span><span className="ml-2"><button className="btn btn-danger" onClick={()=>this.deleteClass(this.state.classinfo.id)}>X</button></span></div>
                        <div className="card-body">
                            <ul className="list-group ">
                                {this.state.classinfo.subjects.length? this.state.classinfo.subjects.map((subject,index)=>
                                    <li className="list-group-item bg-info" key={index}>
                                        <span>{subject.subjectname}</span>
                                        <span className="ml-2"><button className="btn btn-danger m-0" onClick={()=>this.deleteSubject(subject.id)}>X</button></span>
                                        </li>
                                ) :null}
                            </ul>
                        </div>
                    </div>
                    :null}</>
            );
        }
}
export default ViewSubjectCard;