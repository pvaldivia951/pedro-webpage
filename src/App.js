import React, {Fragment} from 'react';
import './App.css';
import profileImage from './pedros_profile_image.png';


class Overlay extends React.Component {
  render () {
    return (
      <div className="top-nav">
        <a href="#about"> About </a>
        <a href="#experience"> Experience </a>
        <a href="#skills"> Skills </a>
        <a href="#education"> Education </a>
        <a href="#hobbies"> Hobbies </a>
      </div>
      
    );
  }
}


function Experience(props) {
  return (
  <>
  <div className="my-container">
    <div className="Prmy-Text-Color small">
      <h6>{props.company}</h6>
      <p>{props.period}</p> 
    </div>
    <div className="Prmy-Text-Color">
      <h4>{props.job_title}</h4>
      <p>{props.description}</p>
    </div>
  </div>
  </>
  );
}

function App() {
  return (
    <div>
      <Overlay />

      {/* About Section */}
      <div>
        <div>
          <br></br>
          <h1 className="App">Pedro Valdivia</h1>
          <p className="App">Online Resume</p>
        </div>
        <div className="my-container">
          <img className="Border-Color" width={256} height={256} src={profileImage} alt="Profile" />
          <div className="div-padding">
            <h4>About Me</h4>
              <p>
                I'm a recent graduate who is working towards growing my developer skills. I'm currently
                learning new skills involved with web development and data engineering. I created this web
                application to learn React and grow my skills in javascript. I am always eager to learn new 
                skills and grow as an individual.
              </p>
              <h4>Details</h4>
              <p className="p-margin">Age: 24</p>
              <p className="p-margin">Email: pvaldivia951@gmail.com</p>
              <p><a href="https://www.linkedin.com/in/pedro-valdivia1/">LinkedIn</a></p>
            </div>
        </div>
        <br></br>
      </div>

      {/* Experience Section */}
      <div className="Prmy-Section-Color">
        <br></br>
        <h1 className="App Prmy-Text-Color">Experience</h1>
        <br></br>
        <Experience 
          job_title="Data Engineer"
          company="Malwarebytes"
          period="October 2020 - Present"
          description="Create and maintain automated ETL Pipelines using Workato and Snowflake. These pipelines are used to ingest data which is used for analysis to gain insights on how to improve business."
          />
        <br></br>
        <br></br>
        <Experience 
          job_title="Teaching Assistant"
          company="University of California, Riverside"
          period="July 2020 - August 2020"
          description="I was a teaching assistant for a summer course offered at UCR. The course was an introductory course to C++ programming fundamentals and my responsibilities were to lead a lab discussion and manage the lab grades."
          />
        <br></br>
      </div>

      {/* Skills Section */}
      <div>
      <br></br>
        <h1 className="App Sndt-Text-Color">Skills</h1>
        <br></br>
      </div>
    </div>
  );
}

export default App;
