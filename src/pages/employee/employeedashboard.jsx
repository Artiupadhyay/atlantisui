import React from 'react';
import EmployeeNavbar from './components/employeenavbar';
import {Redirect} from 'react-router-dom';



class EmployeeDashBoard extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
      

      render() {
        if((localStorage.getItem('role')!=='Teacher' || localStorage.getItem('role')!=='Reception' || localStorage.getItem('role')!=='Accountant')  && ! this.state.redirect){
          localStorage.removeItem('token');
          localStorage.removeItem('image');
          localStorage.removeItem('role');
          this.setState({redrect:true});
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