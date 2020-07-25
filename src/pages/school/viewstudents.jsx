import React from 'react';
import SchoolNav from './components/schoolnav';
import SchoolCard from './components/schoolcard';

function ViewStudents(){
    return(
        <>
        <SchoolNav />
        <div className="d-flex col-4">
            <SchoolCard/>
        </div>
       </>

    );
}
export default ViewStudents;