import React from 'react';
import './App.css';
import profileImage from './pedros_profile_image.png';
import reportWebVitals from './reportWebVitals';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Overlay extends React.Component {
  render () {
    return (
      <div class="Sndy-Section-Color">
      <Navbar className="Prmy-Section-Color" variant="dark">
          <Navbar.Brand href="#home">Pedro's Resume</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#exp">Experience</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#hobbies">Hobbies</Nav.Link>
          </Nav>
      </Navbar>
      <br></br>
      <br></br>
      </div>
    );
  }
}


function Experience(props) {
  return (
  <Container>
    <Row className="justify-content-center">
      <Col lg={3}>
        <div class="Prmy-Text-Color">
          <h6><bold>{props.company}</bold></h6>
          <p>{props.period}</p> 
        </div>
      </Col>
      <Col lg={5}>
        <div class="Prmy-Text-Color">
          <h4><bold>{props.job_title}</bold></h4>
          <p>{props.description}</p>
        </div>
      </Col>
    </Row>
    </Container>
  );
}

function App() {
  return (
    <div>
    <Overlay />

    {/* About Section */}
    <div class="Sndy-Section-Color">
      <div>
        <h1 class="App">Pedro Valdivia</h1>
      </div>
      <Container>
        <hr class="Line-Break-Sndy"/>
        <p class="App">Online Resume</p>
        <br></br>
        <br></br>
        <Row className="justify-content-center" >
          <Col xs={7} sm={6} md={6} lg="auto">
            <img class="Border-Color" width={256} height={256} src={profileImage} alt="Profile" />
          </Col>
          <Col xs={12}  lg={8}>
            <h4>About Me</h4>
            <p>
              I'm a recent graduate who is working towards growing my developer skills. I'm currently
              learning new skills involved with web development and data engineering. I created this web
              application to learn React and grow my skills in javascript. I am always eager to learn new 
              skills and grow as an individual.
            </p>
            <h4>Details</h4>
            <p class="p-margin"><bold>Age:</bold> 23</p>
            <p class="p-margin"><bold>Email:</bold> pvaldivia951@gmail.com</p>
            <p><a href="https://www.linkedin.com/in/pedro-valdivia1/">LinkedIn</a></p>
          </Col>
        </Row>
      </Container>
      <br></br>
    </div>

    {/* Experience Section */}
      <div class="Prmy-Section-Color">
        <br></br>
        <h1 class="App Prmy-Text-Color">Experience</h1>
        <hr class="Line-Break-Prmy"/>
        <br></br>
        <Experience 
          job_title="Data Engineer - Contractor"
          company="Malwarebytes"
          period="October 2020 - Present"
          description="Create automated ETL Pipelines using Workato and Snowflake.ETL pipelines ingest data that is used for analysis to gain insights on how to improve business."
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
    </div>
  );
}

export default App;
