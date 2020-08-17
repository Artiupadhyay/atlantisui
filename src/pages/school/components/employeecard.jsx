
import React from 'react';
import config from './../../config';

function EmployeeCard(props) {
    var status = ''

    const changeStatus =()=>{
        fetch(config.baseurl+'auth/update/account',{
           method:'post',
           headers:{
               'Content-Type': 'application/json',
               'auth':localStorage.getItem('token')
           },
           body: JSON.stringify({email:props.employeeinfo.email, active:!props.employeeinfo.active})
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

    const handleDelete=(employeeid)=>{
        fetch(config.baseurl+'auth/delete/employee',{
            method:'post',
            headers:{
                'Content-Type':'application/json',
                'auth':localStorage.getItem('token')
            },
            body:JSON.stringify({id:employeeid})
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    return(
        <div className="mt-5 card  ml-3 shadow mr-auto border border-success" style={{width: "15rem"}}>
            <img className="card-img-top"  src={"data:image/jpeg;base64,"+props.employeeinfo.image} style={{height:"15rem"}}  alt="Card cap" />
            <div className="card-body">
            <h5 className="card-title">Name :- {props.employeeinfo.name}</h5>
            <p className="card-text">Account Status :-  {(props.employeeinfo.active).toString()}</p>
            <div className="d-flex flex-row"> 
                <button onClick={changeStatus} className={props.employeeinfo.active?" btn btn-danger mx-auto":"btn btn-success mx-auto"}>{props.employeeinfo.active ? "Deactivate": "Activate"}</button>
                <button onClick={()=>handleDelete(props.employeeinfo.id)} className="mx-auto btn btn-danger">Delete</button>
            </div>
            </div>
        </div>
    );
}
export default EmployeeCard;
           


