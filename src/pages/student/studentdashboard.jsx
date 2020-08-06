import React from 'react';
import StudentNavbar from './components/studentnavbar';
import {Redirect} from 'react-router-dom';



class StudentDashboard extends React.Component{
    constructor(){
        super();
        this.state={
          redirect:null
        }
    }
      

      render() {
        if(localStorage.getItem('role') !== 'Student'  && ! this.state.redirect){
          localStorage.removeItem('token');
          localStorage.removeItem('image');
          localStorage.removeItem('role');
          this.setState({redirect:true});
       }
        return(
            <>
             {this.state.redirect ? <Redirect to = '/' />:null}
            <StudentNavbar/>
           <div className="row d-flex justify-content">
            </div>
            </>

        );
      }
      }
    
    export default StudentDashboard;