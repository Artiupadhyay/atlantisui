
import React from 'react';
import config from './../../config';

function EmployeeCard(props) {
    const status = ''

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

    return(
        <div className="mt-5 card  ml-3 shadow mr-auto" style={{width: "12rem"}}>
            <img className="card-img-top"  src={"data:image/jpeg;base64,"+props.employeeinfo.image}  alt="Card image cap" />
            <div className="card-body">
            <h5 className="card-title">Name :- {props.employeeinfo.name}</h5>
            <p className="card-text">Account Status :-  {(props.employeeinfo.active).toString()}</p>
            <button onClick={changeStatus} className={props.employeeinfo.active?" btn btn-danger":"btn btn-success"}>{props.employeeinfo.active ? "Deactivate account": "Activate account"}</button>
            </div>
        </div>
    );
}
export default EmployeeCard;
           


