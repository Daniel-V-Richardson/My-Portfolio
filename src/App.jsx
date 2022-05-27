import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Education from "./components/services/Education";
// import Testimonials from "./components/testimonials/Testimonials";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Education />
      <Project />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      
    </>
  );
};

export default App;
