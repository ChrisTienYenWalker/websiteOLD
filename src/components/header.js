import React, {usestate} from 'react';

function header(){

    const items = [
        {
            link: "#",
            name: "About Me"
        },
        {           
             name: "Projects",
            link: "#", 
        },
        
        {
            link: "#",
            name: "Contacts"
        }
    ]


    const listItems = items.map((items) => <li><a href={items.link}>{items.name}</a></li>)

    return(
        <div className="header">
            <nav>
                <ul>{listItems}</ul>
            </nav>
        </div>
    )
}

export default header;
