import React, { useState } from "react";
import logo from "./images/Logo.png";
import sky from "./images/background.bmp";
// image from https://mymodernmet.com/capturing-gorgeous-sky-colors/
import demo from "./images/demoImage.jpg";
import personalPhoto from './images/Me.jpg'

// aos is a animation libary
import AOS from "aos";
import "aos/dist/aos.css"; // also use css animations for styles
// ..
//time duration of animations
AOS.init({
  duration: 500,
});

// all animations are css or aos

//title function displays title animation, name, and rotating text
function Title() {
  return (
    <div className="title">
      {/* animation done in css */}
      <div >
        <h1>I'm Chris Walker</h1>
      </div>

      <div
        className="rotatingText"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {/*
         creating a box and changing letters through react   
        animations done with css
        */}
        <span class="rotatingText-span">High School Student</span>
        <span class="rotatingText-span">Programmer</span>
        <span class="rotatingText-span">Optimist</span>
      </div>
    </div>
  );
}

// about class
// animations done with aos
// pretty much box text
function About() {
  return (
    <div className="about">
      <h1 data-aos="fade-down" class="font-effect-emboss">My Profile</h1>
      <hr></hr>
      <img
        data-aos="fade-up-left"
        data-aos-easing="ease-in-sine"
        src={personalPhoto}
      ></img>
      <div data-aos="fade-up-right" data-aos-easing="ease-in-sine">
        <h2>Details</h2>
        <p>Name: Chris Walker</p>
        <p>Nationality: Canadian</p>
        <p>Status: Student</p>
        <p>Favourite Food: BBQ Pork Bun</p>
        <hr></hr>
        <h2>About Me</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

      </div>
    </div>
  );
}

// //quote is very similar to about just with some different css
// not used
// function Quote() {
//   return (
//     <div className="quote">
//       <h3 data-aos="fade-down" data-aos-duration="1000">
//         My Thoughts on Reality
//       </h3>
//       <div className="quote-box" data-aos="fade-left">
//         <p>
//           "People Live their Lives bound by what they accept as correct and
//           true. That is how they define "Reality"
//         </p>
//         <p>- Masashi Kishimoto</p>
//       </div>
//       <div className="quote-box" data-aos="fade-right">
//         <p>
//           “...Every single one of us goes through life depending on and bound by
//           our individual knowledge and awareness. And we call it reality.
//           However, both knowledge and awareness are equivocal. One's reality
//           might be another's illusion. We all live inside our own fantasies,
//           don't you think?”{" "}
//         </p>
//         <p>- Masashi Kishimoto</p>
//       </div>
//     </div>
//   );
// }

function Goals() {
  return (
    <div className="quote">
      
      <h3 data-aos="fade-down" data-aos-duration="1000">
        My Goals
      </h3>
      <div className="quote-box" data-aos="fade-left">
        <p>
          "People Live their Lives bound by what they accept as correct and
          true. That is how they define "Reality"
        </p>
        <p>- Masashi Kishimoto</p>
      </div>
      <div className="quote-box" data-aos="fade-right">
        <p>- A way to help others and the world through technology</p>
      </div>
      <div className="quote-box" data-aos="fade-left">
        <p>- Understanding why and how people and things work</p>
      </div>
      <div className="quote-box" data-aos="fade-left">
        <p>- Using the most of my time in this reality</p>
      </div>
    </div>
  );
}
// projects is a display with buttons that allow you to change the text
function Projects() {
  const project = [
    // infinite amount of projects can be added
    // made of a image text title and link to the project
    // might add more after ex. hover
    {
      //index 1
      title: "Title",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      link: "https://google.com",
      image: demo,
    },
    {
      // index 2
      title: "Title2",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      link: "https://google.com",
      image: logo,
    },
    {
      // index 2
      title: "Title3",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      link: "https://google.com",
      image: logo,
    },
    //insert new here

    {
      title: "Title4",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      link: "https://google.com",
      image: logo,
    },

    //insert new here

    // template
    // {
    //   title: "title",
    //   text:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //   link: "https://google.com",
    //   image: logo,
    // },
  ];

  // how project is shown/the varibale template
  // creating a box for each project 
  let projectDisplay = (
    <div>
      <a href="https://google.com">
    <div data-aos="fade-right" className="projectContainer" style={{  marginTop: "8vh", left: "52vw" }}>
      <img src={demo} width="100%" height="100%"></img>
      <div>
        <h3>{project[0].title}</h3>
        {/* <p>{project[0].text}</p> */}
        <br></br>
        <a href={project[0].link}>Check out the project at {project[0].link}</a>
      </div>
    </div>
    </a>
    
    <a href="https://google.com">

    <div data-aos="fade-left" className="projectContainer"  style={{ marginTop: "8vh", left: "22vw"}}>
    <img src={demo} width="100%" height="100%"></img>
   <div>
     <h3>{project[1].title}</h3>
     {/* <p>{project[1].text}</p> */}
     <br></br>
     <a href={project[1].link}>Check out the project at {project[1].link}</a>
    </div>
   </div>
    </a>

   <a href="https://google.com">
    <div data-aos="fade-left" className="projectContainer"  style={{  marginTop: "55vh", left: "52vw"}}>
      <img src={demo} width="100%" height="100%"></img>
   <div>
   <h3>{project[2].title}</h3>
     {/* <p>{project[2].text}</p> */}
     <br></br>
     <a href={project[2].link}>Check out the project at {project[2].link}</a>
   </div>
  </div>
  </a>
 
  <a href="https://google.com">
    <div data-aos="fade-right" className="projectContainer"  style={{  marginTop: "55vh", left: "22vw"}}>
      <img src={demo} width="100%" height="100%"></img>
   <div>
   <h3>{project[3].title}</h3>
     {/* <p>{project[2].text}</p> */}
     <br></br>
     <a href={project[3].link}>Check out the project at {project[3].link}</a>
   </div>
  </div>
  </a>
   </div>
  );


  return (
    <div className="projects" data-aos="fade-up">
      <h1>Projects</h1>
      <h2>A little bit of text desc.</h2>
      <hr></hr>
      <div>{projectDisplay}</div>

    </div>
  );
}

function Extra() {
  //? add whatever
  return <div></div>;
}

// displaying body/ combining all functions and giving section names and ids
function body() {
  return (
    <div>
      <div className="titleImg">
        <img src={sky} ></img>
      </div>
      <Title></Title>
      <div>
        <section className="section-one">
          <div id="about" className="linkOne"></div>
          <About></About>
        </section>

        <section className="section-two">
          <Goals></Goals>
        </section> 

      <section className="section-three" id="projects">
        <Projects></Projects>
      </section>
      {/*    <Extra></Extra> */}
    </div>
    </div>
  );
}

export default body;
