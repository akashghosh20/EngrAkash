import React from 'react';

const Gallery = () => {
    return (
        <div>
            <h2 class="text-2xl font-bold text-center">Gallery</h2><br></br><br></br>

         <div class="grid lg:grid-cols-2 ml-4 mr-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
         <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="images/ducampus.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="images/scout.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="images/akash01.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>   <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="images/award.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>   <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="images/shahajalal.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Programming Contest(IUPC) in RUET</h5>
        <p class="card-text">This is the first Inter University Programming Context of our team Byte Bird.We participated the contest in first semester </p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

         </div>
        </div>
    );
};

export default Gallery;