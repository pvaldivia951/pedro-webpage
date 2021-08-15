import React from 'react';
import './App.css';
import profileImage from './pedros_profile_image.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Overlay extends React.Component {
  render () {
    return (
      <div>
      <Navbar className="Prmy-Section-Color" variant="dark">
          <Navbar.Brand href="#home">Pedro's Resume</Navbar.Brand>
          <Nav className="mr-auto">
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
        <div className="Prmy-Text-Color">
          <h6>{props.company}</h6>
          <p>{props.period}</p> 
        </div>
      </Col>
      <Col lg={5}>
        <div className="Prmy-Text-Color">
          <h4>{props.job_title}</h4>
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
      <div>
        <div>
          <h1 className="App">Pedro Valdivia</h1>
        </div>
        <Container>
          <hr className="Line-Break-Sndy"/>
          <p className="App">Online Resume</p>
          <br></br>
          <br></br>
          <Row className="justify-content-center" >
            <Col xs={7} sm={6} md={6} lg="auto">
              <img className="Border-Color" width={256} height={256} src={profileImage} alt="Profile" />
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
              <p className="p-margin">Age: 24</p>
              <p className="p-margin">Email: pvaldivia951@gmail.com</p>
              <p><a href="https://www.linkedin.com/in/pedro-valdivia1/">LinkedIn</a></p>
            </Col>
          </Row>
        </Container>
        <br></br>
      </div>

      {/* Experience Section */}
      <div className="Prmy-Section-Color">
        <br></br>
        <h1 className="App Prmy-Text-Color">Experience</h1>
        <hr className="Line-Break-Prmy"/>
        <br></br>
        <Experience 
          job_title="Data Engineer - Contractor"
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
        <hr className="Line-Break-Sndy"/>
        <br></br>
      </div>
    </div>
  );
}

export default App;
