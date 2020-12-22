import React, { usestate } from "react";
import github from "./images/github.png";
import gmail from "./images/gmail.webp";
import discord from "./images/discord.png";
import reddit from "./images/reddit.webp";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1500,
});

function footer() {
  const contacts = [
    {
      name: "email",
      image: gmail,
      link: "mailto:christienyenwalker@gmail.com",
    },
    {
      name: "github",
      image: github,
      link: "https://github.com/ChrisTeinYenWalker",
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

  // change to image later
  const contactlist = contacts.map((contact) => (
    <li>
      <a href={contact.link}>
        <img src={contact.image}></img>
      </a>
    </li>
  ));

  return (
    <div className="footer">
      <div data-aos="zoom-in-up">
        <p>My Contacts</p>
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
