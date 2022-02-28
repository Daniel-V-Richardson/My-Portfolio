import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_awdfaga",
      "template_q2aclfc",
      form.current,
      "gEm24TJLOeBprHj2S"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>richardson20june@gmail.com</h5>
            <a href="mailto:richardson20june@gmail.com" target="blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>Richard</h5>
            <a href="https://wa.me/+917007322396" target="blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineGithub className="contact__option-icon" />
            <h4>Github</h4>
            <h5>richardson20june@gmail.com</h5>
            <a href="https://github.com/Daniel-V-Richardson" target="blank">
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            <FaTelegramPlane className="message__option-icon" /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
