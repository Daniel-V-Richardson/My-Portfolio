import React from "react";
import "./education.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="education">
      <h5>What I Studied</h5>
      <h2>My Education</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Pursuing Graduation (2020-2023)</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Completed My Bachelors In Computer Science & Engineering From Grace College Of Engineering, Tuticorin, which is affliated to Anna University</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Which Is Under Anna University And Afflicated To AICTE(All India Council Of Technical Education).
              </p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Higher Education (2017-2020)</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Completed Diploma In Computer Science & Engineering from Gems Polytechnic College, Arungabad-Bihar.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              With An Total Of 85% Under AICTE(All India Council Of Technical Education).
              </p>
            </li>
           </ul>
        </article>
        {/* Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Secondary Education (2016-2017)</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              I Completed My Secondary Education With An Total Of 70%.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
               From  D.C Lewis Memorial School,Renukoot Which Was Of An ICSE Standard
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
