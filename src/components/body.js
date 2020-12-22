import React, { useState } from "react";
import logo from "./images/Logo.png";
import sky from "./images/sky.jpg";

// aos is a animation libary
import AOS from "aos";
import "aos/dist/aos.css"; // also use css animations for styles
// ..
//time duration of animations
AOS.init({
  duration: 1500,
});

// all animations are css or aos

//title function displays title animation, name, and rotating text
function Title() {
  return (
    <div>
      {/* animation done in css */}
      <div className="title">
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
      <img
        data-aos="fade-up-left"
        data-aos-easing="ease-in-sine"
        src={logo}
      ></img>
      <div data-aos="fade-up-right" data-aos-easing="ease-in-sine">
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

//quote is very similar to about just with some different css
function Quote() {
  return (
    <div className="quote">
      <h3 data-aos="fade-down" data-aos-duration="1000">
        My Thoughts on Reality
      </h3>
      <div className="quote-box" data-aos="fade-left">
        <p>
          "People Live their Lives bound by what they accept as correct and
          true. That is how they define "Reality"
        </p>
        <p>- Masashi Kishimoto</p>
      </div>
      <div className="quote-box" data-aos="fade-right">
        <p>
          “...Every single one of us goes through life depending on and bound by
          our individual knowledge and awareness. And we call it reality.
          However, both knowledge and awareness are equivocal. One's reality
          might be another's illusion. We all live inside our own fantasies,
          don't you think?”{" "}
        </p>
        <p>- Masashi Kishimoto</p>
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
      image: logo,
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

  // setting index that determines what project is being shown
  const [index, setIndex] = useState(1);

  const [Title, setTitle] = useState(project[0].title);
  const [Text, setText] = useState(project[0].text);
  const [Link, setLink] = useState(project[0].link);
  const [Image, setImage] = useState(project[0].image);

  // how project is shown/the varibale template
  let projectDisplay = (
    <div className="projectContent">
      <div style={{ backgroundColor: "lightblue" }}>
        <h1>{Title}</h1>
        <img src={Image}></img>

        <p>
          {Text} <br></br>
          <br></br>You can check it out at: <a href={Link}> {Link}</a>
        </p>
      </div>
    </div>
  );

  // right arrow increase 
  // left arrow decrease
  // the display

  return (
    <div className="projects" data-aos="fade-down">
      <h1>Projects</h1>
      <p>A little bit of text desc.</p>

      <button
        className="rightArrow"
        // checks if at max then goes back to posy 1
        onClick={() => {
          if (index === project.length) {
            setIndex(1);
            // project display must start one below index 
            setTitle(project[0].title);
            setText(project[0].text);
            setLink(project[0].link);
            setImage(project[0].image);
          } else {
            // will increase if it is not at max
            setIndex(index + 1);
            setTitle(project[index].title);
            setText(project[index].text);
            setLink(project[index].link);
            setImage(project[index].image);
          }
        }}
      >
        &rsaquo;
      </button>
      <button
        className="leftArrow"
        // same as right arrow but with subtraction
        onClick={() => {
          if (index === 1) {
            setIndex(project.length);
            setTitle(project[project.length-1].title);
            setText(project[project.length-1].text);
            setLink(project[project.length-1].link);
            setImage(project[project.length-1].image);
          } else {
            setIndex(index - 1);
            setTitle(project[index - 2].title);
            setText(project[index - 2].text);
            setLink(project[index - 2].link);
            setImage(project[index - 2].image);
          }
          console.log(index);
        }}
      >
        &lsaquo;
      </button>
      {projectDisplay}
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
        <img src={sky}></img>
      </div>
      <Title></Title>
      <div>
        <section className="section-one">
          <div id="about" className="linkOne"></div>
          <About></About>
        </section>

        <section className="section-two">
          <Quote></Quote>
        </section>

        <section className="section-three" id="projects">
          <Projects></Projects>
        </section>
        {/*    
            <Extra></Extra> */}
      </div>
    </div>
  );
}

export default body;
