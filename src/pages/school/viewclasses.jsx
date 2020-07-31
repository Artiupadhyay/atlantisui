import React from 'react';
import {Redirect} from 'react-router-dom';
import configs from './../config';
import SchoolNav from './components/schoolnav';
import ClassCard from './components/classcard';
let status = '';
class ViewClasses extends React.Component{

    constructor() {
        super();
        this.state = {
            classes : null,
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
    render(){

        if(localStorage.getItem('role')!=='School' && ! this.state.redirect){
            localStorage.removeItem('token');
            localStorage.removeItem('image');
            localStorage.removeItem('role');
            this.setState({redrect:true});
          }
            return(<>
            {this.state.redirect?<Redirect to = '/' />:null}
                <Container-Fluid>
                <SchoolNav />
                {this.state.classes ?
                <div className="d-flex align-content-center align-self-center flex-row flex-wrap container shadow mt-5 mb-5 pb-5">
                    {this.state.classes.map((classInfo, index)=> <ClassCard key={index} classInfo={classInfo}/>)}
                </div>:null
                }
                
                </Container-Fluid>
                </>
            );
        }
}
export default ViewClasses;