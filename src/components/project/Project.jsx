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
import IMG9 from "../../assets/letzwrite.gif";
import IMG10 from "../../assets/oldportfolio.gif";
import IMG11 from "../../assets/news.gif";
import IMG12 from "../../assets/letzchat.gif";
import IMG13 from "../../assets/letzread.gif";
import IMG14 from "../../assets/letzwatch.gif";
import IMG15 from "../../assets/newzio.gif";
import IMG16 from "../../assets/markv1.gif";
import IMG17 from "../../assets/imagine.gif";

const data = [
  {
    id: 17,
    image: IMG17,
    title: "Imagine (An Free AI image generation tool and sharing platform)",
    github: "https://github.com/Daniel-V-Richardson/Imagine",
    demo: "https://imagine-puce.vercel.app/",
  },

  {
    id: 14,
    image: IMG14,
    title: "LetzWatch (Watch Youtube Videos For Free)",
    github: "https://github.com/Daniel-V-Richardson/letzwatch",
    demo: "https://letzwatch-yt.netlify.app/",
  },
  {
    id: 16,
    image: IMG16,
    title: "Mark v1 (Coding Assistant)",
    github: "https://github.com/Daniel-V-Richardson/Coding-Mark",
    demo: "https://mark-daniel-v-richardson.vercel.app/",
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
    image: IMG15,
    title: "Newzio (Simple News Application - RAPIDAPI)",
    github: "https://github.com/Daniel-V-Richardson/Newzio",
    demo: "https://github.com/Daniel-V-Richardson/Newzio",
  },
  {
    id: 6,
    image: IMG13,
    title: "LetzRead (Blog WebApp)",
    github: "https://github.com/Daniel-V-Richardson/letzread",
    demo: "https://letzread-v1.vercel.app/",
  },
  {
    id: 5,
    image: IMG12,
    title: "LetzChat (Universal Messenger)",
    github: "https://github.com/Daniel-V-Richardson/letzchat",
    demo: "https://github.com/Daniel-V-Richardson/letzchat",
  },
  {
    id: 8,
    image: IMG8,
    title: "LetzAnswer (React Quiz)",
    github: "https://github.com/Daniel-V-Richardson/Quiz-App-React",
    demo: "https://letzanswer.vercel.app/",
  },
  {
    id: 9,
    image: IMG9,
    title: "LetzWrite",
    github: "https://github.com/Daniel-V-Richardson/letzwrite",
    demo: "https://letzwrite.vercel.app/",
  },
  {
    id: 10,
    image: IMG10,
    title: "Old Portfolio (React)",
    github: "https://github.com/Daniel-V-Richardson/danielrichardson.github.io",
    demo: "https://danielrichardson.netlify.app/",
  },
  {
    id: 7,
    image: IMG7,
    title: "JK Seafoods (MERN APP)",
    github: "https://github.com/Daniel-V-Richardson/jkseafoods",
    demo: "https://jkseafoods.herokuapp.com/",
  },
  {
    id: 11,
    image: IMG11,
    title: "ADBN News (News Classifier App)",
    github: "https://github.com/Daniel-V-Richardson/ADBN-Newz",
    demo: "https://github.com/Daniel-V-Richardson/ADBN-Newz",
  },
  {
    id: 12,
    image: IMG5,
    title: "Evernote Clone (React)",
    github: "https://github.com/Daniel-V-Richardson",
    demo: "https://danielrichardson.netlify.app/workinprogress.html",
  },
  {
    id: 13,
    image: IMG6,
    title: "To Do (Android App)",
    github: "https://github.com/Daniel-V-Richardson",
    demo: "https://danielrichardson.netlify.app/workinprogress.html",
  },
  {
    id: 2,
    image: IMG2,
    title: "Let's Chat (React Messenger)",
    github: "https://github.com/Daniel-Richardson-20/Let-s-Chat",
    demo: "https://letschatwith.netlify.app/",
  },
  {
    id: 15,
    image: IMG4,
    title: "Let's Listen",
    github: "https://github.com/Daniel-V-Richardson",
    demo: "https://danielrichardson.netlify.app/workinprogress.html",
  },
  {
    id: 1,
    image: IMG1,
    title: "Mark (Covid 19 Chatbot)",
    github: "https://github.com/Daniel-Richardson-20/Mark-Covid-19-Chatbot",
    demo: "https://github.com/Daniel-Richardson-20/Mark-Covid-19-Chatbot",
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
