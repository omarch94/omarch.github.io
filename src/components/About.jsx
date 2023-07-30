import React, { useState, useEffect } from "react";

import Header from "../interface/Header";
import classes from "./About.module.scss";
import Resume from "./Resume";

const About = () => {
  const [tablet, setTablet] = useState(false);
  const [laptop, setLaptop] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setLaptop(true);
    } else if (window.innerWidth <= 768) {
      setTablet(true);
    } else {
      setLaptop(false);
      setTablet(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize();
  });

  return (
    <section id="about">
      <div className={classes.about}>
        <Header>ABOUT</Header>
        <div className={classes.body}>
          <div className={classes.background}>
            <h3>Background</h3>
            <p className={classes.text}>
            I'm Omar Cherti, a Full Stack Web Developer with a background in Finance and Accounting. After completing my Master's Degree, I followed my passion for coding and embarked on an exciting journey into the world of web development. Now, I thrive on transforming ideas into innovative web applications that make a positive impact. Let's create something extraordinary together!
            </p>
          
            {!tablet && !laptop && <Resume />}
          </div>
          <div className={classes.skills}>
            <h3>Technologies</h3>
            <div className={classes.tech}>
              <p>Bootstrap</p>
              <p>CSS/Sass</p>
              <p>Wordpress</p>
              <p>Express.js</p>
              <p>Firebase</p>
              <p>Git/Github</p>
              <p>HTML5</p>
              <p>JavaScript</p>
              <p>Material UI</p>
              <p>MongoDB</p>
              <p>Mongoose</p>
              <p>MySQL</p>
              <p>Node.js</p>
              <p>Postman</p>
              <p>Python</p>
              <p>React.js</p>
              <p>Redux</p>
              <p>REST API</p>
              <p>Tailwind</p>
              <p>Php</p>
              <p>Laravel</p>

            </div>
          </div>
          <div className={classes.button}>{tablet && <Resume />}</div>
        </div>
        <div className={classes.button}>{laptop && <Resume />}</div>
      </div>
    </section>
  );
};

export default About;
