
import React from 'react';

function HomeworkCard(props) {
    

    return(
        <div className="mt-5 card  ml-3 shadow mr-auto" style={{width: "30rem"}}>
            {props.homeworkinfo.image !=='/media/null' ? <img className="card-img-top"  src={"data:image/jpeg;base64,"+props.homeworkinfo.image}  alt="Card" /> :null}
            <div className="card-body">
            {props.homeworkinfo.homework ?<p className="card-text">Homework :- {props.homeworkinfo.homework}</p> :null}
            <p> Date :-  {props.homeworkinfo.homeworkdate}</p>
            </div>
        </div>
    );
}
export default HomeworkCard;
           


