import React from "react";

// images found in src/components/images
// all logos
import github from "./images/github.png";
import gmail from "./images/gmail.webp";
import discord from "./images/discord.png";
import reddit from "./images/reddit.webp";

// aos animation library
import AOS from "aos";
import "aos/dist/aos.css";

//duration of animations(individual)
AOS.init({
  duration: 1500,
});

// footer is a box with links to my contacts
function footer() {

  //contacts stored in containers 
  // containers have a image(imported at top), name(not useed), and a link
  const contacts = [
    {
      name: "email",
      image: gmail, // calling image from import
      link: "mailto:christienyenwalker@gmail.com", // creates a email
    },
    {
      name: "github",
      image: github,
      link: "https://github.com/ChrisTeinYenWalker", // website links
    },

    {
      name: "reddit",
      image: reddit,
      link: "https://www.reddit.com/user/master4020/",
    },

    {
      name: "discord",
      image: discord,
      link: "https://discord.com/users/master#3162",
    },
  ];

  // maping/ creating a variable that contains sets of elements with images and links for thoses images(all data in contacts)
  const contactlist = contacts.map((contact) => (
    <li>
      <a href={contact.link}>

        <img src={contact.image}></img> 
      </a>
    </li>
  ));

  return (
    //classname for css and id 
    <div className="footer" id="contacts">
      {/* animations(zoom in up) */}
      <div data-aos="zoom-in-up">
        <p>My Contacts</p>
        {/* nav bar that displays all contacts in the form of a list */}
        <nav>
          <ul>
            <ul>{contactlist}</ul>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default footer;
