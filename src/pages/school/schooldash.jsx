import React from 'react';
import {Redirect} from 'react-router-dom';
import SchoolNav from './components/schoolnav';

function SchoolDash(props) {
    const [redirect, setRedirect] = React.useState(false);
    if(localStorage.getItem('role')!=='School' && !redirect){
        localStorage.removeItem('token');
        localStorage.removeItem('image');
        localStorage.removeItem('role');
        setRedirect(true);
      }
    
    return(<>{redirect?<Redirect to = '/' />:null}
            <SchoolNav/>
           <div className="row d-flex justify-content">
            </div>
            </>

    );
}

export default SchoolDash;