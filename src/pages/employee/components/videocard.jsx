import React from 'react';
    

function VideoCard(props) {
    return(
        <div className="mt-5 card  ml-3 shadow mr-auto" style={{width: "25rem", minHeight:"23rem"}}>
            <iframe className="card-img-top"  src={props.videoinfo.videolink} title={props.videoinfo.chaptername}  alt="Card image cap" height="80%" width="80%" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="card-body d-flex">
                <h5 className="card-title">{props.videoinfo.chaptername}</h5>
               
            </div>
        </div>
    );
}
export default VideoCard;
