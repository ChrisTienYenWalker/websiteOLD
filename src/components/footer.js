import React, {usestate} from 'react';

function footer(){

    const items = [
        {
            name: "name1",
            image: 'img',
            link: "#"
        },
        {
            name: "name1",
            image: 'img',
            link: "#"
        },
        
        {
            name: "name1",
            image: 'img',
            link: "#"
        }
    ]

    // change to image later
    const listItems = items.map((items) => <li><a href={items.link}>{items.name}</a></li>)

    return(
        <div>
            <nav>
                <ul>
                    <ul>{listItems}</ul>
                </ul>
            </nav>
        </div>
    )
}

export default footer;
