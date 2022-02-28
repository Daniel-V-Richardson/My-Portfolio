import React from "react";
import "./project.css";
import IMG1 from "../../assets/chatbot.gif";
import IMG2 from "../../assets/chat.gif";
import IMG3 from "../../assets/notes.gif";
import IMG4 from "../../assets/listen.gif";
import IMG5 from "../../assets/evernote.gif";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Mark (Covid 19 Chatbot)",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Let's Chat (React Messenger)",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Let's Note (Android App)",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Let's Listen",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Evernote Clone (React)",
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project__item">
              <div className="project__item-image">
                <img src={image} alt="Chatbot"></img>
              </div>
              <h3>{title}</h3>
              <div className="project__item-cta">
                <a href={github} className="btn" target="blank">
                  Github
                </a>
                <a href={demo} target="blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
