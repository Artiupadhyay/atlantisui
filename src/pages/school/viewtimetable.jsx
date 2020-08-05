import React from 'react';
import {Redirect} from 'react-router-dom';
import SchoolNav from './components/schoolnav';
import configs from './../config';
import config from './../config';
let status = ''
let status1 = ''

class ViewTimeTable extends React.Component{
    constructor() {
        super();
        this.state = {
            classes : null,
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
        fetch(config.baseurl +'school/timetable',{
            method:'put',
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
                this.setState({timetable: data});
            }
            else{
                console.log("err"+data)
            }
        })
    }

    getPeriodList=()=>{
        let periodCount = this.state.timetable.monday.length;
        if (periodCount < this.state.timetable.tuesday.length){
            periodCount = this.state.timetable.tuesday.length;
        }
        if(periodCount < this.state.timetable.wednesday.length){
            periodCount = this.state.timetable.wednesday.length
        }
        if(periodCount < this.state.timetable.thursday.length){
            periodCount = this.state.timetable.thursday.length
        }
        if(periodCount < this.state.timetable.friday.length){
            periodCount = this.state.timetable.friday.length
        }
        if(periodCount < this.state.timetable.saturday.length){
            periodCount = this.state.timetable.saturday.length
        }
        
        let periodList = []
        let i = 1 ;
        while(i <= periodCount){
            periodList.push(i.toString())
            i++;
        }
        console.log(periodCount);
        return periodList;
    }
   
    render(){
        console.log(this.state);
        if(localStorage.getItem('role')!=='School' && ! this.state.redirect){
            localStorage.removeItem('token');
            localStorage.removeItem('image');
            localStorage.removeItem('role');
            this.setState({redirect:true});
        }

        console.log(this.state);
        return(<>{this.state.redirect?<Redirect to = '/' />:null}
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
                    
                </div>
                </div> :<>Kindly Add Some classes </>}
                {this.state.timetable ?
                    <div className="d-flex align-content-center align-self-center flex-column flex-wrap container shadow mt-5 mb-5">
                        <div className="table-responsive">
                            <table className="table table-sm table-bordered">
                                <thead>
                                    <tr>
                                    <th scope="col">Period<br/>Day</th>
                                    {
                                    this.getPeriodList().map((period)=>(<th scope="col">{period}</th>))
                                    }
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="col">Monday</th>
                                    {this.state.timetable.monday.map((dayinfo,index)=>
                                    (
                                    <td scope="col">{dayinfo.subjectname +" by "+ dayinfo.teachername}</td>
                                    
                                    ))}
                                    </tr>
                                    <tr>
                                    <th scope="col">Tuesday</th>
                                    {this.state.timetable.tuesday.map((dayinfo,index)=>
                                    (
                                    <td scope="col">{dayinfo.subjectname +" by "+ dayinfo.teachername}</td>
                                    
                                    ))}
                                    </tr>
                                    <tr>
                                    <th scope="col">Wednesday</th>
                                    {this.state.timetable.wednesday.map((dayinfo,index)=>
                                    (
                                    <td scope="col">{dayinfo.subjectname +" by "+ dayinfo.teachername}</td>
                                    
                                    ))}
                                    </tr>
                                    <tr>
                                    <th scope="col">Thursday</th>
                                    {this.state.timetable.thursday.map((dayinfo,index)=>
                                    (
                                    <td scope="col">{dayinfo.subjectname +" by "+ dayinfo.teachername}</td>
                                    
                                    ))}
                                    </tr>
                                    <tr>
                                    <th scope="col">Friday</th>
                                    {this.state.timetable.monday.map((dayinfo,index)=>
                                    (
                                    <td scope="col">{dayinfo.subjectname +" by "+ dayinfo.teachername}</td>
                                    
                                    ))}
                                    </tr>
                                    <tr>
                                    <th scope="col">Saturday</th>
                                    {this.state.timetable.monday.map((dayinfo,index)=>
                                    (
                                    <td scope="col">{dayinfo.subjectname +" by "+ dayinfo.teachername}</td>
                                    
                                    ))}
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                :null}
            </Container-Fluid> 
              </>
          );
    };
    
  }
export default ViewTimeTable;