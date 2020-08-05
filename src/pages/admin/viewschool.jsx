import React from 'react';
import {Redirect} from 'react-router-dom';
import Navbar from './components/navbar';
import Card from './components/card';
import config from './../config';

function ViewSchool(){
    const [schools, setschools] = React.useState(null);
    const [error, seterror] = React.useState(null);
    const [checkSchool, setCheckSchool]= React.useState(true);
    const [redirect, setRedirect] = React.useState(false);
    var status = '';
    if (!schools && checkSchool){
        fetch(config.baseurl+'auth/admin/get/all/school',{
        method:'get',
        headers:{
            'auth':localStorage.getItem('token'),
        }
    }).then(res=>{ 
        status =res.status;
        return res.json();
    }).then(data=>{
        if(status === 200){
            setschools(data);
            console.log(data)
        }
        else{
            seterror(data)
        }
        setCheckSchool(false);
    }).catch(err=>console.log(err));
}
if(localStorage.getItem('role')!=='Admin' && !redirect){
    localStorage.removeItem('token');
    localStorage.removeItem('image');
    localStorage.removeItem('role');
    setRedirect(true);
  }
    return(
        <>
        {redirect?<Redirect to = '/' />:null}
        <Navbar />
        <div className="d-flex col-4">
        {error?<div className="alert alert-danger" role="alert">{error}</div> :null }
               
            {
                schools ?( schools.map((school,index)=><Card 
                name= {school.name} image = {school.image}
                email={school.email} status={(school.active).toString()}
                key={index}/>
                )):<h2>You Dont Have any school</h2>
            }
            <Card/>
        </div>
       </>

    );
}
export default ViewSchool;