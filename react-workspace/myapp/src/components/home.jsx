import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
       <div>
       <div id="myCarousel" class="carousel slide" data-ride="carousel">
         <ol class="carousel-indicators">
           <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
           <li data-target="#myCarousel" data-slide-to="1"></li>
           <li data-target="#myCarousel" data-slide-to="2"></li>
         </ol>
         <div class="carousel-inner">
           <div class="carousel-item active">
             <img
               src="https://www.gla.ac.uk/media/Media_307425_smxx.jpg"
               width="100%"
               height="500px"
               alt="crop"
             />
           </div>
           <div class="carousel-item">
             <img
               src="https://image.freepik.com/fotos-gratis/close-up-de-um-doutor-frente-um-fundo-brilhante_53419-4416.jpg"
               width="100%"
               height="500px"
               alt="crop"
             />
           </div>
           <div class="carousel-item">
             <img
               src="https://www.simon-kucher.com/sites/default/files/styles/670xh/public/2019-06/digital_health_02_0.jpg?itok=zcuj88CN"
               width="100%"
               height="500px"
               alt="crop"
             />
           </div>
         </div>
         <a
           class="carousel-control-prev"
           href="#myCarousel"
           role="button"
           data-slide="prev"
         >
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="sr-only">Previous</span>
         </a>
         <a
           class="carousel-control-next"
           href="#myCarousel"
           role="button"
           data-slide="next"
         >
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="sr-only">Next</span>
         </a>
       </div>


       <hr class="featurette-divider"></hr>
         <div class="row featurette">
           <div class="col-md-7">
             <h2 class="featurette-heading">
               We Care for Your Health
               Every Moment
               <span class="text-muted"></span>
             </h2>
             <p class="lead">
                As a Doctor, we deliver the top-natch health care 
                services to all our patients.
             </p>
           </div>
           <div class="col-md-5">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGkWqlZ1y8JxZBFjwKN4aiV4L4N4csVKb_g&usqp=CAU" svg
               class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
               width="500"
               height="500"
               role="img"
               aria-label="Placeholder: 500x500"
               preserveAspectRatio="xMidYMid slice"
               focusable="false"
               />
               <title>Placeholder</title>
               <rect width="100%" height="100%" fill="#eee" />
               <text x="50%" y="50%" fill="#aaa" dy=".3em">
               </text>
           </div>
         </div>

       <hr class="featurette-divider"></hr>
         <div class="row featurette">
           <div class="col-md-7 order-md-2">
             <h2 class="featurette-heading">
               It's All About Healing.
             </h2>
             <p class="lead">
              Do as much as possible for the patient, and as little as possible to the patient.
             </p>
           </div>
           <div class="col-md-5">
             <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGF0aWVudHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" svg
               class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
               width="500"
               height="500"
               role="img"
               aria-label="Placeholder: 500x500"
               preserveAspectRatio="xMidYMid slice"
               focusable="false"
               />
               <title>Placeholder</title>
               <rect width="100%" height="100%" fill="#eee" />
               <text x="50%" y="50%" fill="#aaa" dy=".3em"><br></br>
               </text>
           </div>
         </div>

       <hr class="featurette-divider"></hr>
         <div class="row featurette">
           <div class="col-md-7">
             <h2 class="featurette-heading">
               To Take Care Of Others, Start By Taking Care Of Yourself.
             </h2>
             <p class="lead">
               Food is fuel but not therapy.
             </p>
           </div>
           <div class="col-md-5">
             <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1035&q=80" svg
               class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
               width="500"
               height="500"
               role="img"
               aria-label="Placeholder: 500x500"
               preserveAspectRatio="xMidYMid slice"
               focusable="false"
               />
               <title>Placeholder</title>
               <rect width="100%" height="100%" fill="#eee" />
               <text x="50%" y="50%" fill="#aaa" dy=".3em"><br></br>
               </text>
           </div>
         </div>
       <hr class="featurette-divider"></hr>
       <div
        class=" text-center bg-dark"
        style={{
          color: "white",
          marginTop: "1rem",
          padding: "1rem",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        <p>
          © 2021 HSM Group. All Rights Reserved
          <NavLink to="#"> Privacy Terms</NavLink>
        </p>
      </div>
     </div>
    );
  }
}

export default Home;