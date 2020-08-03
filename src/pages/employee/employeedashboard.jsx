import React from 'react';
import EmployeeNavbar from './components/employeenavbar';



class EmployeeDashBoard extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
      

      render() {
        return(
            <>
            <EmployeeNavbar/>
           <div className="row d-flex justify-content">
            </div>
            </>

        );
      }
      }
    
    export default EmployeeDashBoard;