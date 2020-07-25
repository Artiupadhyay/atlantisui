import React from 'react';
import Navbar from './components/navbar';
import Card from './components/card';

function ViewSchool(){
    return(
        <>
        <Navbar />
        <div className="d-flex col-4">
            <Card/>
        </div>
       </>

    );
}
export default ViewSchool;