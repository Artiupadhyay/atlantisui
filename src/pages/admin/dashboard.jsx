import React from 'react';
import {connect} from'react-redux';
import Navbar from './components/navbar';

function Dashboard(props) {
    
    return(
           <div className="row d-flex justify-content">
               <Navbar />
            </div>

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