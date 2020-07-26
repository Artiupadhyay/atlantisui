import React from 'react';
import { Redirect } from 'react-router-dom';

function Logout(){
    localStorage.clear('token');
    localStorage.clear('image');
    localStorage.clear('role');
    return (
        <Redirect to ='/' />
    );
}
export default Logout;