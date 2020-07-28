import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from'react-redux';
import Navbar from './components/navbar';
import DashboardCard from './components/dashboardcard';

function Dashboard(props) {
    const [redirect, setRedirect] = React.useState(false);
    if(localStorage.getItem('role')!='Admin' && !redirect){
        localStorage.removeItem('token');
        localStorage.removeItem('image');
        localStorage.removeItem('role');
        setRedirect(true);
      }
    
    return(
        <>            {redirect?<Redirect to = '/' />:null}
           <div className="row d-flex justify-content">
                <Navbar/>
                <DashboardCard/>
            </div>
            </>

    );
}
 const mapStateToProps = (state)=>{
     return {
         authenticate:state.authenticate
    };
 }
 const mapDispatchToProps = (dispatch)=>{
     return {
         changeName : ()=>{dispatch({})}
     };
 }

  

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);