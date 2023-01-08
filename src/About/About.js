import React from 'react';

const About = () => {
    return (
        <div>
            <h2 class="text-center text-2xl font-bold">About Me </h2>
            <br></br><br></br>
            <div class="grid card  gap-4 mb-4 mt-4 ml-8 mr-8">
  <div class="row g-5">
    <div class="col-md-4">
      <img src="/images/akash1.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Akash Ghosh</h5>
        <p class="card-text">Senior Software Engineer at Cloud Company</p><br></br>
        <p class="card-text">C.E.O ,founder and Ex Senior Software Engineer at Easy Study BD</p>
        <p class="card-text">C.T.O of Tutora Academy</p>
        <p class="card-text"></p>
        <p class="card-text">Bsc(Engineering) in Computer Science and Engineering</p>
        <p class="card-text">Faculty of Engineering and Technology,University of Dhaka</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;