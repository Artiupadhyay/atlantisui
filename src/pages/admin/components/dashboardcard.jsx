import React from'react';

function DashboardCard(props){

return(
<div className=" ml-5  mr-5 d-flex row justify-content-between">
<div class=" mt-3 col-md-5 card text-white bg-danger">
  <div class="card-header">Admin</div>
  <div class="card-body">
    <h5 class="card-title">Admin Details</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class=" mt-3 col-md-5 card text-white bg-success">
  <div class="card-header">Employee Detail</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class=" mt-3 col-md-5 card text-white bg-danger">
  <div class="card-header">School Detail</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class=" mt-3 col-md-5 card text-white bg-success">
  <div class="card-header">Teacher detail</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
);
}
export default DashboardCard;