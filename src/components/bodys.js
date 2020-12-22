import React, { useState } from "react";
import logo from "./images/Logo.png";
import sky from "./images/sky.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1500,
});

// all animations are css or aos

function Title() {
  return (
    <div>
      <div className="title">
        <h1>I'm Chris Walker</h1>
      </div>

      <div
        className="rotatingText"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {/* creating a box and changing letters through react*/}
        <span class="rotatingText-span">High School Student</span>
        <span class="rotatingText-span">Programmer</span>
        <span class="rotatingText-span">Optimist</span>
      </div>
    </div>
  );
}

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

function Projects() {
  //const [position, setPosition] = useState(0);

  const project = [
    // template of project
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
    {
      // empty container for if statement below so it doens't crash because the usestate compiles before the if statement
      title: "Title4",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      link: "https://google.com",
      image: logo,
    },
    {
      // empty container for if statement below so it doens't crash because the usestate compiles before the if statement
      title: "Title5",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      link: "https://google.com",
      image: logo,
    },
  ];

  const [index, setIndex] = useState(0);

  // if(index == -1){
  //   setIndex(3);
  // }
  // else if(index > 4){
  //   setIndex(0);
  // }

  const [Title, setTitle] = useState(project[index].title);
  const [Text, setText] = useState(project[0].text);
  const [Link, setLink] = useState(project[0].link);
  const [Image, setImage] = useState(project[0].image);

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
  if (index > 3) {
    setIndex(1);
    setTitle(project[0].title);
  }

  if (index < 1) {
    setIndex(4);
    setTitle(project[2].title);
  }

  return (
    <div className="projects" data-aos="fade-down">
      <h1>Projects</h1>
      <p>A little bit of text desc.</p>
      <button
        className="rightArrow"
        onClick={() => {
          setIndex(index + 1);

          setTitle(project[index].title);
          setText(project[index].text);
          setLink(project[index].link);
          setImage(project[index].image);
        }}
      >
        &rsaquo;
      </button>
      <p>{index}</p>
      <button
        className="leftArrow"
        onClick={() => {
          setIndex(index - 1);
          console.log(index)

          setTitle(project[index].title);
          setText(project[index].text);
          setLink(project[index].link);
          setImage(project[index].image);
        }}
      >
        &rsaquo;
      </button>
      {projectDisplay}
    </div>
  );
}

function Extra() {
  //? add whatever
  return <div></div>;
}

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
