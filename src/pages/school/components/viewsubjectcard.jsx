import React from 'react';
import configs from './../../config';
let status = '';
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

    render(){
            return(<>
                {this.state.classinfo ?
                <div className="card text-white bg-info mb-3 mr-auto ml-3 mt-4 border border-success" style={{maxWidth: "18rem"}}>
                        <div className="card-header">{this.state.classinfo.classname + " " + this.state.classinfo.section}</div>
                        <div className="card-body">
                            <ul className="list-group ">
                                {this.state.classinfo.subjects.length? this.state.classinfo.subjects.map((subject,index)=>
                                    <li className="list-group-item bg-info" key={index}>{subject.subjectname}</li>
                                ) :null}
                            </ul>
                        </div>
                    </div>
                    :null}</>
            );
        }
}
export default ViewSubjectCard;