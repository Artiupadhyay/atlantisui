import React from 'react';
import config from './../../config';
    

function VideoCard(props) {

    const handleDelete=(videoid)=>{
        fetch(config.baseurl+'auth/delete/video',{
            method:'post',
            headers:{
                'Content-Type':'application/json',
                'auth':localStorage.getItem('token')
            },
            body:JSON.stringify({id:videoid})
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    return(
        <div className="mt-5 card  ml-3 shadow mr-auto border border-success" style={{width: "25rem", minHeight:"23rem"}}>
            <iframe className="card-img-top"  src={props.videoinfo.videolink} title={props.videoinfo.chaptername} alt="Card image cap" height="80%" width="80%" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="card-body d-flex">
                <h5 className="card-title">{props.videoinfo.chaptername}</h5>
                <button onClick={()=>handleDelete(props.videoinfo.id)} className="btn btn-danger ml-2 p-2">Delete Video</button>
            </div>
        </div>
    );
}
export default VideoCard;
