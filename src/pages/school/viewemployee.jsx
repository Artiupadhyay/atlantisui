import React from 'react';
import SchoolNav from './components/schoolnav';
import SchoolCard from './components/schoolcard';

function ViewEmployeeReg(){
    return(
        <>
        <SchoolNav />
        <div className="d-flex col-4">
            <SchoolCard/>
        </div>
       </>

    );
}
export default ViewEmployeeReg;