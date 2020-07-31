import React from 'react';
    

function VideoCard(props) {
    console.log(props)
    return(
        <div className="mt-5 card  ml-3 shadow mr-auto" style={{width: "25rem", height:"25rem"}}>
            <iframe className="card-img-top"  src={props.videoinfo.videolink}  alt="Card image cap" height="80%" width="80%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="card-body">
            <h5 className="card-title">{props.videoinfo.chaptername}</h5>
            {/* <button onClick={changeStatus} className={props.studentinfo.active?" btn btn-danger":"btn btn-success"}>{props.studentinfo.active ? "Deactivate account": "Activate account"}</button> */}
            </div>
        </div>
    );
}
export default VideoCard;
