import React from 'react';

    //creating sections/links on a nav bar

function header(){

    // container for each sections
    // each contains their link and name on the location they are going to 
    const sections = [
        //about and project id are in body
        {
            link: "#about", // link is being called by id placed in html tags and when pressed they go to the div
            name: "Profile"
        },
        {           
             name: "Projects",
            link: "#projects", 
        },
        
        { 
            //contact id is in footer
            link: "#contacts",
            name: "Contacts"
        }
    ]

    // maping all items in sections and creating html elements for each link 
    //turning the section container into multiple list elements 
    const sectionsList = sections.map((sections) => <li><a href={sections.link}>{sections.name}</a></li>)

    return(
        // adding css
        <div className="header">
            <nav>
                {/* displaying all sections/links along a nav bar */}
                <ul>{sectionsList}</ul>
            </nav>
        </div>
    )
}

export default header;
