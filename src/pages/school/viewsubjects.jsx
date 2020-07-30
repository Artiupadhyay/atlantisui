import React from 'react';
import SchoolNav from './components/schoolnav';
import configs from './../config';
let status = '';
class ViewSubjects extends React.Component{

    constructor() {
        super();
        this.state = {
            classes : null,
            selectedClass : null,
            subjects : null
        };
    }

   
    render(){
            return(
                <Container-Fluid>
                <SchoolNav />
                <div className="d-flex align-content-center align-self-center flex-row flex-wrap container shadow mt-5 mb-5 pb-5">
                    <div class="card text-white bg-info mb-3 mr-auto ml-3 mt-4 " style={{maxWidth: "18rem"}}>
                        <div class="card-header">Class Name</div>
                        <div class="card-body">
                            <ul class="list-group ">
                                <li class="list-group-item bg-info">Subject 1</li>
                                <li class="list-group-item bg-info">Subject 2</li>
                                <li class="list-group-item bg-info">Subject 3</li>
                                <li class="list-group-item bg-info">Subject 4</li>
                                <li class="list-group-item bg-info">Subject 5</li>
                                <li class="list-group-item bg-info">Subject 6</li>
                                <li class="list-group-item bg-info">Subject 7</li>
                                </ul>
                            </div>
                    </div>
                    <div class="card text-white bg-info mb-3 mr-auto ml-3 mt-4 " style={{maxWidth: "18rem"}}>
                        <div class="card-header">Class Name</div>
                        <div class="card-body">
                            <ul class="list-group ">
                                <li class="list-group-item bg-info">Subject 1</li>
                                <li class="list-group-item bg-info">Subject 2</li>
                                <li class="list-group-item bg-info">Subject 3</li>
                                <li class="list-group-item bg-info">Subject 4</li>
                                <li class="list-group-item bg-info">Subject 5</li>
                                <li class="list-group-item bg-info">Subject 6</li>
                                <li class="list-group-item bg-info">Subject 7</li>
                                </ul>
                            </div>
                    </div>
                    <div class="card text-white bg-info mb-3 mr-auto ml-3 mt-4 " style={{maxWidth: "18rem"}}>
                        <div class="card-header">Class Name</div>
                        <div class="card-body">
                            <ul class="list-group ">
                                <li class="list-group-item bg-info">Subject 1</li>
                                <li class="list-group-item bg-info">Subject 2</li>
                                <li class="list-group-item bg-info">Subject 3</li>
                                <li class="list-group-item bg-info">Subject 4</li>
                                <li class="list-group-item bg-info">Subject 5</li>
                                <li class="list-group-item bg-info">Subject 6</li>
                                <li class="list-group-item bg-info">Subject 7</li>
                                </ul>
                            </div>
                    </div>
                    <div class="card text-white bg-info mb-3 mr-auto ml-3 mt-4 " style={{maxWidth: "18rem"}}>
                        <div class="card-header">Class Name</div>
                        <div class="card-body">
                            <ul class="list-group ">
                                <li class="list-group-item bg-info">Subject 1</li>
                                <li class="list-group-item bg-info">Subject 2</li>
                                <li class="list-group-item bg-info">Subject 3</li>
                                <li class="list-group-item bg-info">Subject 4</li>
                                <li class="list-group-item bg-info">Subject 5</li>
                                <li class="list-group-item bg-info">Subject 6</li>
                                <li class="list-group-item bg-info">Subject 7</li>
                                </ul>
                            </div>
                    </div>
                </div>
                </Container-Fluid>
            
            );
        }
}
export default ViewSubjects;