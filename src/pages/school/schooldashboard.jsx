import React from 'react';
import {connect} from'react-redux';
import SchoolNavbar from './components/schoolnavbar';

function SchoolDashboard(props) {
    
    return(
        
           <div className="row d-flex justify-content">
                <SchoolNavbar/>
            </div>

    );
}
export default SchoolDashboard;