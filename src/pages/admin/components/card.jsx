import React from 'react';
import config from './../../config';

 function Card(props){
     const [active, setactive] = React.useState((props.status === 'true'));
     const [status, setstatus] = React.useState(null);
     const [error, seterror] = React.useState(null);
     const changeStatus =()=>{
         fetch(config.baseurl+'auth/update/account',{
            method:'post',
            headers:{
                'Content-Type': 'application/json',
                'auth':localStorage.getItem('token')
            },
            body: JSON.stringify({email:props.email, active:!active})
         }).then(res =>{
             setstatus(res.status);
             return res.json();
         }).then(data=>{
             console.log(data);
            if(status === 200){
                setactive(!active);
            }
            else{
                seterror(data);
            }
        }).catch(err=>console.log(err));
     }

     return(
         <>
         {props.name?<div className=" d-flex row justify content between card">
             <div className="col-md-4">
         <img className="card-img-top" src={"data:image/jpeg;base64,"+props.image} alt="Card image cap"/>
         <div className="card-body">
            <p className="card-text">Name:-{props.name}</p>
            <p className="card-text">Email:-{props.email}</p>
            <p className="card-text">Account Status:-{active.toString()}</p>
            <button onClick={changeStatus} className={active?" btn btn-danger":"btn btn-success"}>{active ? "Deactivate account": "Activate account"}</button>
         </div>
         </div>
          </div>:null}
        </>
     );
 }
 export default Card;