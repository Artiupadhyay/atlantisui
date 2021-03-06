import React from 'react';
import {Redirect}  from 'react-router-dom';
import SchoolNav from './components/schoolnav';
import configs from './../config';
import ViewSubjectCard from './components/viewsubjectcard';
let status = '';
class ViewSubjects extends React.Component{

    constructor() {
        super();
        this.state = {
            classes : null,
        };
    }

    componentDidMount =()=>{
        fetch(configs.baseurl+'school/subject',{
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
                this.setState({classes:data});
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
            return(
                <Container-Fluid>
                    {this.state.redirect?<Redirect to = '/' />:null}
            
                    <SchoolNav />
                    <div className="d-flex align-content-center align-self-center flex-row flex-wrap container shadow mt-5 mb-5 pb-5 border border-success">
                        {this.state.classes?
                        this.state.classes.map((classinfo,index)=>
                        <ViewSubjectCard {...classinfo} key={index}/>)
                        :"Please add some classes"}
                    </div>
                </Container-Fluid>
            
            );
        }
}
export default ViewSubjects;