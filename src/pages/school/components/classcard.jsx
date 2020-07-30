import React from 'react';
    

function ClassCard(props) {
    return(
        <div className="card text-white bg-info mb-3 mr-auto ml-3 mt-4 " style={{maxWidth: "18rem"}}>
            <div className="card-header">Class - {props.classInfo.classname +" " + props.classInfo.section} </div>
            <div className="card-body">
                <p className="card-text">Number of Students {props.classInfo.studentCount}</p>
                <p className="card-text">Number Of Teachers {props.classInfo.teacherCount}</p>
            </div>
        </div>
    );
}
export default ClassCard;
           