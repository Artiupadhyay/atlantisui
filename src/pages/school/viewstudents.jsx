import React from 'react';
import SchoolNav from './components/schoolnav';
import SchoolCard from './components/schoolcard';

function ViewStudents(){
    return(
        <Container-Fluid>
        <SchoolNav />
            <SchoolCard/>
            </Container-Fluid>
    
    );
}
export default ViewStudents;