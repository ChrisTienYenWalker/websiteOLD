import React, {usestate} from 'react';
import TextTransition, { presets } from "react-text-transition";

function Title(){

    return(
        <div >
            <div className="title">
              <h1>I'm Chris Walker</h1>
            </div>

            <div className="rotatingText">
                {/* creating a box and changing letters through react*/}
                <span class="rotatingText-span">1</span>
                <span class="rotatingText-span">2</span>
                <span class="rotatingText-span">3</span>
                   </div>
        </div>
    )
}

function About(){
    return(
        <div>
            <h2></h2>
            <img></img>
            <p></p>
        </div>
    )
}

function Projects(){

   //const [position, setPosition] = useState(0);

    const project = [

        // template of project
        {
            title: "name 1",
            position: 0,
            image: 'a',
            text: "some text",
            background: "color",
            link: '#'
        },

       
    ];

    const AllProjects = project.map((project)  => <li><div><p>{project.title}</p></div></li>)

    return(
        <div>
            <AllProjects></AllProjects>
        </div>
    )
}

function Extra(){

    //? add whatever
    return(
        <div>

        </div>
    )
}

function body(){
    return(
        <div>

            <Title></Title>
            {/* <About></About>
            <Projects></Projects>
            <Extra></Extra> */}
            
        </div>
    )
}

export default body;