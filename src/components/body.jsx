import React from "react";
import './body.css';
import City from './Images/CityOfOttawa.jpeg'
import Digitera from './Images/Digitera.png'

import Vex from './Images/Vex.jpg';
import cu from './Images/CU.jpg';
import ce from './Images/G11CE.png';
import cs from './Images/grade11.png';
import Kinaxis from './Images/Kinaxis.png';
import linear from './Images/linear.png';
import uottawa from './Images/uottawa.jpg';
import levels from './Images/levels.png';
// aos is a animation libary
import AOS from "aos";
import "aos/dist/aos.css"; // also use css animations for styles

// ..
//time duration of animations

//information


AOS.init({
  duration: 500,
});

function Name(){
    return(
        <div className="title">
        {/* animation done in css */}
        <div>
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
            <span className="rotatingText-span">High School Student</span>
            <span className="rotatingText-span">Programmer</span>
            <span className="rotatingText-span">Optimist</span>
            <span className="rotatingText-span">Athlete</span>
        </div>
    </div>
    )
}

function Work(){
    let list = [
        {
            title: 'Full Stack PHP Developer(Full-time)',
            time: "July 2021 - August 2021",
            company: "Digitera",
            text: 'At Digitera I worked on fixing and rewriting buggy code, implementing a statistics tracking system and adding a new registration system.',
            image: Digitera,
            id: 2
        },
    
        {
            title: 'Wadding Pool Attendent(Part-time)',
            time: "June 2021 - August 2021",
            company: "City Of Ottawa",
            text: 'I worked at various pools covering shifts and meeting new people. I interacted with the community to give a pleasent COVID-19 safe pool expierence',
            image: City, 
            id: 1
        },
    
    ];
    let worklist = list.map((list) => 
    <li key={list.id}>
            <img data-aos="fade-up-left" data-aos-easing="ease-in-sine"  src={list.image}></img>
            <div data-aos="fade-up-right" data-aos-easing="ease-in-sine" style={{border:"none"}}>
            <h3 >{list.title}</h3>
            <h2>{list.company}</h2>
            <h2>{list.time}</h2>
            <section className="highlights-text">
                <p>{list.text}</p>
            </section>
            </div>
    </li>
    )
    return(
        <div className="highlights-work">
            <div>
                <h1 className="highlightsTitle">Work Expierence Highlights</h1>
                    <ul>
                        {worklist}
                        <li>
                        </li>
                    </ul>
            </div>
        </div>
    )
}

function Project(){
    let list = [
        {
            title: 'Vex Robotics',
            text: 'Me and my team designed a robot to compete against another team to pick up the most blocks',
            image: Vex,
            link: '', 
            linkText: '', 
            id: 0
        },
    
        {
            title: 'UottaHack3',
            text: 'A health website and app that records and reminds you to take your medicine',
            image: uottawa,
            link: 'Check the code out on Github', 
            linkText: 'https://github.com/ChrisTeinYenWalker/uottahack2020-webapp', 
            id: 1
        },
        
        {
            title: 'Carleton Hackathon',
            text: 'A social media for students to get help and communicate about school related topics',
            image: cu,
            link: 'Check the code out on Github', 
            linkText: 'https://github.com/A1igator/cuhacking2020-frontend', 
            id: 2
        },

        {
            title: 'Grade 11 Engineering projects',
            text: 'A class where I built various computer engineering projects including: a binary bit calculator, traffic light system, number guessing game and more',
            image: ce,
            link: '', 
            linkText: '', 
            id: 3
        },

        {
            title: 'Grade 11 CS projects',
            text: 'A grade 11 class where I built a games, console applications and solved algorithmic problems',
            image: cs,
            link: 'Check the code out on Github', 
            linkText: 'https://github.com/ChrisTeinYenWalker/Grade11cs', 
            id: 4
        },

        {
            title: 'Average level Calculator',
            text: 'A calculator to help predict your percentage grade from all your tests and assignments using the Ontairo 4 level',
            image: levels,
            link: 'Check the code out on Github', 
            linkText: 'https://github.com/ChrisTeinYenWalker/average-Levels.github.io', 
            id: 5
        },

        {
            title: 'Kinaxis Hackathon',
            text: 'A mental health 2D maze game with a 3D level',
            image: Kinaxis,
            link: 'Check the code out on Github', 
            linkText: 'https://github.com/A1igator/LTAMH', 
            id: 6
        },

        {
            title: 'Linear Calculator',
            text: 'Solve linear line mathematics problems',
            image: linear,
            link: 'Check the code out on Github', 
            linkText: 'https://github.com/ChrisTeinYenWalker/linear-calculator', 
            id: 7
        },              
    
    ];
    let projectList = list.map((list) => 

    <li key={list.id}>
        <img data-aos="fade-up-left" data-aos-easing="ease-in-sine"  src={list.image}></img>
        <div data-aos="fade-up-right" data-aos-easing="ease-in-sine" style={{border:"none"}}>
        <h3 >{list.title}</h3>
        <h2>{list.company}</h2>
        <h2>{list.time}</h2>
        <section className="highlights-text">
            <p>{list.text}</p>
        </section>
        </div>
    </li>
    )
    return(
        <div className="highlights-pj">
            <div>
                <h1 className="highlightsTitle" >Project Highlights</h1>
                <ul>
                    {projectList}
                    <li data-aos="fade-up-right" data-aos-easing="ease-in-sine"  ><a className="highlightsLink" href="https://github.com/ChrisTeinYenWalker">Check Out More Projects Here</a></li>
                </ul>
            </div>
        </div>
    )
}



function body(){
    return(
    <div>
        <div>
            <Name></Name>
            <Work></Work>
            <Project></Project>
        </div>
        <div id="particles-js" className="highlightsParticles">

        </div>

    </div>

    )
}

export default body;