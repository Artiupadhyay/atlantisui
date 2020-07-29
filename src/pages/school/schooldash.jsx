import React from 'react';
import {connect} from'react-redux';
import SchoolNav from './components/schoolnav';

function SchoolDash(props) {
    
    return(<>
            <SchoolNav/>
           <div className="row d-flex justify-content">
            </div>
            </>

    );
}

export default SchoolDash;