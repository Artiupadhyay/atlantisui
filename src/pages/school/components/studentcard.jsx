
import React from 'react';
import config from './../../config';
import StudentModel from './studentmodel';
import { propTypes } from 'react-bootstrap/esm/Image';

function StudentCard(props) {

    const status = ''

    const changeStatus =()=>{
        fetch(config.baseurl+'auth/update/account',{
           method:'post',
           headers:{
               'Content-Type': 'application/json',
               'auth':localStorage.getItem('token')
           },
           body: JSON.stringify({email:props.studentinfo.email, active:!props.studentinfo.active})
        }).then(res =>{
            status = res.status;
            return res.json();
        }).then(data=>{
           if(status === 200){
               console.log("Success");
           }
           else{
               console.log("failed");
           }
       }).catch(err=>console.log(err));
    }

    const handleDelete=(studentid)=>{
        fetch(config.baseurl+'auth/delete/student',{
            method:'post',
            headers:{
                'Content-Type':'application/json',
                'auth':localStorage.getItem('token')
            },
            body:JSON.stringify({id:studentid})
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    return(
        <div className="mt-5 card  ml-3 shadow mr-auto border border-success" style={{width: "15rem"}}>
            <img className="card-img-top"  src={"data:image/jpeg;base64,"+props.studentinfo.image} style={{height:"15rem"}} alt="Card image cap" />
            <div className="card-body d-flex flex-column">
            <h5 className="card-title">Name :- {props.studentinfo.name}</h5>
            <p className="card-text">Account Status :-  {(props.studentinfo.active).toString()}</p>
            <div className="d-flex flex-row">
                <button onClick={changeStatus} className={props.studentinfo.active?"btn btn-danger mx-auto":"btn btn-success mx-auto"}>{props.studentinfo.active ? "Deactivate": "Activate"}</button>
                <button onClick={()=>handleDelete(props.studentinfo.id)} className="btn btn-danger mx-auto">Delete</button>
            
            </div>
            </div>
            <StudentModel studentid = {props.studentinfo.id}/>
        </div>
    );
}
export default StudentCard;
           


