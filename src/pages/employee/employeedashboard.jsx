import React from 'react';
import EmployeeNavbar from './components/employeenavbar';
import {Redirect} from 'react-router-dom';



class EmployeeDashBoard extends React.Component{
    constructor(){
        super();
        this.state={
          redirect:null
        }
    }
      

      render() {
        if(!['Teacher','Reception','Accountant'].includes(localStorage.getItem('role'))  && ! this.state.redirect){
          localStorage.removeItem('token');
          localStorage.removeItem('image');
          localStorage.removeItem('role');
          this.setState({redirect:true});
       }
        return(
            <>
             {this.state.redirect ? <Redirect to = '/' />:null}
            <EmployeeNavbar/>
           <div className="row d-flex justify-content">
            </div>
            </>

        );
      }
      }
    
    export default EmployeeDashBoard;