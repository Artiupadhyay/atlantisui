
import React from 'react';

function EmployeeCard(props) {
    return(
        <div className="mt-5 card  ml-3 shadow mr-auto" style={{width: "12rem"}}>
            <img className="card-img-top" src={require('./../../../user.png')} alt="Card image cap" />
            <div className="card-body">
            <h5 className="card-title">User Name</h5>
            <p className="card-text">Account Status :- </p>
            <a href="#" className="btn btn-primary">Activate deactivate</a>
            </div>
        </div>
    );
}
export default EmployeeCard;
           


