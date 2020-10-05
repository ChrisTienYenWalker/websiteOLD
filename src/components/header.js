import React, {usestate} from 'react';

function header(){

    const items = [
        {
            link: "#",
            name: "name1"
        },
        {
            link: "#",
            name: "name2"
        },
        
        {
            link: "#",
            name: "name3"
        }
    ]


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

export default header;
