import classes from "./Portfolio.module.scss";
import Header from "../interface/Header";
import Card from "../interface/Card";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <div>
        <Header>PORTFOLIO</Header>
        <ul className={classes.content}>
          {/* <Card
            // img="https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fdemographix_gif.gif?alt=media"
            title="Real Estate Dashboard"
            description="A real estate dashboard using react js typescript refine google auth mongo db and express js"
            tech={["Beautiful Soup", "Flask", "Material UI", "React.js", "OpenAI API", "PaLM API", "PostgreSQL", "Python", "SQLAlchemy"]}
            git="https://github.com/omarch94/RealEstateApp"
            // link="http://18.209.200.234/"
          /> */}
            <Card
            img={"images/o-dashy.png"}
            title="O-DASHY"
            description="A Dashboard with multiple tools such as calendar color picker and kanbar "
            tech={["React JS", "Tailwind css"]}
            git="https://github.com/omarch94/Dashboard"
            link="https://o-dashy.netlify.app/"
          />
          <Card
            img={"images/gym.png"}
            title="Gym App"
            description="A gym App With the functionality to choose exercise categories and specific muscle groups, browse more than one thousand exercises with practical examples, pagination, exercise details, pull related videos from youtube, display similar exercises, "
            tech={["React Js", "Axios", "Tailwindcss", "RapidApi"]}
            git="https://github.com/omarch94/Gym"
            // link="https://horse-race-mu.vercel.app/"
          />
          <Card
            img={"images/greenworks.png"}
            title="Greenworks"
            description="A marketplace for ecological things"
            tech={[
              "html5",
              "MySQL",
              "css3",
              "Javascript",
              "Php",
              "PDO",
            ]}
            git="https://github.com/omarch94/GREENWORKS"
            // link="https://mithin.tv"
          />
          <Card
            img={"images/elhmiza_app.png"}
            title="Elhmiza App"
            description="One On One is a slack bot that randomly pairs up individuals within a channel for one-on-one's to help them get to know each other."
            tech={["Jest", "MongoDB", "Node.js", "Render", "Slack API"]}
            git="https://github.com/mithintv/one-on-one"
            link="https://slack.com/apps/A04DXH6FR8U-one-on-one"
          />
          <Card
            img={"images/Application.png"}
            title="Wordle Leaderboard"
            description="A slackbot that keeps track of daily Wordle scores hooked to a frontend that sorts players in a leaderboard with additional stats."
            tech={[
              "Bulma",
              "Express.js",
              "MongoDB",
              "Node.js",
              "React.js",
              "Render",
              "Slack API",
            ]}
            git="https://github.com/mithintv/wordle-tracker"
            link="https://wordle-tracker.netlify.app/#all"
          />
          {/* <Card
            img="https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fportfolio-screen.png?alt=media"
            title="Portfolio"
            description="The latest iteration of my portfolio. This is a single-page built with React, CSS3/Sass and Firebase hosted on Netlify."
            tech={["CSS3/Sass", "Firebase", "Netlify", "React"]}
            git="https://github.com/mithintv/portfolio-react"
            link="https://portfolio-react-2022-v1.netlify.app/"
          /> */}
         
          {/* <Card
            img="https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fkeeper-app-screen.png?alt=media"
            title="Keeper"
            description="A clone of Google Keep. Create, update, and delete notes!"
            tech={["CSS3", "Netlify", "React.js"]}
            git="https://github.com/mithintv/keeper-app"
            link="https://keeper-app-project.netlify.app/"
          /> */}
        
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
