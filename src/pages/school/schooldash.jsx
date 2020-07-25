import React from 'react';
import {connect} from'react-redux';
import SchoolNav from './components/schoolnav';

function SchoolDash(props) {
    
    return(
        
           <div className="row d-flex justify-content">
                <SchoolNav/>
            </div>

    );
}
export default SchoolDash;