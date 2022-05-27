import React from "react";
import "./project.css";
import IMG1 from "../../assets/chatbot.gif";
import IMG2 from "../../assets/chat.gif";
import IMG3 from "../../assets/notes.gif";
import IMG4 from "../../assets/listen.gif";
import IMG5 from "../../assets/evernote.gif";
import IMG6 from "../../assets/todo.gif";
import IMG7 from "../../assets/jk.gif";
import IMG8 from "../../assets/quiz.gif";
import IMG9 from "../../assets/amazon-blockchain.gif";
import IMG10 from "../../assets/oldportfolio.gif";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Mark (Covid 19 Chatbot)",
    github: "https://github.com/Daniel-Richardson-20/Mark-Covid-19-Chatbot",
    demo: "https://github.com/Daniel-Richardson-20/Mark-Covid-19-Chatbot",
  },
  {
    id: 2,
    image: IMG2,
    title: "Let's Chat (React Messenger)",
    github: "https://github.com/Daniel-Richardson-20/Let-s-Chat",
    demo: "https://letschatwith.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Let's Note (Android App)",
    github: "https://github.com/Daniel-V-Richardson/Let-s-Note",
    demo: "https://github.com/Daniel-V-Richardson/Let-s-Note",
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
  {
    id: 6,
    image: IMG6,
    title: "To Do (Android App)",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 7,
    image: IMG7,
    title: "JK Seafoods (MERN APP)",
    github: "https://github.com/Daniel-V-Richardson/jkseafoods",
    demo: "http://jkseafoods-store.herokuapp.com/",
  },
  {
    id: 8,
    image: IMG8,
    title: "Letz Answer (React Quiz)",
    github: "https://github.com/Daniel-V-Richardson/Quiz-App-React",
    demo: "https://letsanswerthequiz.herokuapp.com/",
  },
  {
    id: 9,
    image: IMG9,
    title: "Amazon Blockchain (Blockchain)",
    github: "https://github.com/Daniel-V-Richardson/amazon-blockchain",
    demo: "https://danielrichardson.netlify.app/workinprogress.html",
  },
  {
    id: 10,
    image: IMG10,
    title: "Old Portfolio (React)",
    github: "https://github.com/Daniel-V-Richardson/danielrichardson.github.io",
    demo: "https://danielrichardson.netlify.app/",
  }
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
