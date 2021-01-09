import logo from './logo.svg';
import './App.css';
import reportWebVitals from './reportWebVitals';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <Container>
        <Card>
          <Card.Header> Contractor, Malwarebytes Inc </Card.Header>
          <Card.Text>
            <ul>
              <li>Create automated ETL Pipelines using Workato and Snowflake</li>
              <li>ETL pipelines ingest data that is used for analysis to gain insights on how to improve business</li>
            </ul>
          </Card.Text>
        </Card>
      </Container>
  );
}

export default App;
