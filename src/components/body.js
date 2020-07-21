import React from 'react';
import Title from './bodyComponents/title';
import About from './bodyComponents/AboutMe';
import Projects from './bodyComponents/projects';

export default function body(){
    return(
        <div>
            
            <Title></Title>
            <About></About>
            <Projects></Projects>
            
        </div>
    );
}

