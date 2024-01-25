import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NICValidationComponent from './components/NICValidationComponent'
import DashboardComponent from './components/DashboardComponent';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col lg={6} xs={12}>
          <NICValidationComponent />
        </Col>
        <Col lg={6} xs={12}>
          <DashboardComponent />
        </Col>
      </Row>
    </Container>
  );
}

export default App;