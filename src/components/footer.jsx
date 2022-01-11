import React from 'react';
import './footer.css'

function footer(){
    let contacts = [
        {
            name: "Email",
            link: "mailto:christienyenwalker@gmail.com",
            image:"https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" ,
            id: 1
        },

        {
            name: "Linkdin",
            image: "http://t0.gstatic.com/images?q=tbn:ANd9GcRMCA3j2A8hfLl9p5UAU5nd9lvqLlNZvqoU4xOsZ192uH4IYS6X",
            link: "https://www.linkedin.com/in/chris-walker-185485216/",
            id: 2

        },

        {
            name: "Github",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
            link: "https://github.com/ChrisTeinYenWalker",
            id: 3
        },

        {
            name: "Facebook",
            link: "https://www.facebook.com/profile.php?id=100045286130324",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg",
            id: 4
        },
    ]

    const contactList =  contacts.map((contacts) => <li key={contacts.id}><a href={contacts.link}><img src={contacts.image} ></img></a></li>);

    return(
        <div className='box'>
            <div className='contact'>
                <h1>Contact Me</h1>
                {contactList}
            </div>
        </div>
    );
}

export default footer;