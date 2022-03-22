import React from 'react';
import './index.css';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from 'react-bootstrap';

function App() {
  return (
    <div className="App text-center p-5">
      <Container>
        <Row>
          <Col>
            <Card className="mb-5" style={{ color: 'black', width: '550px' }}>
              <Card.Img
                className="img-fluid "
                src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/07/solar_orbiter_s_first_views_of_the_sun5/22136942-2-eng-GB/Solar_Orbiter_s_first_views_of_the_Sun_pillars.gif"
              />
              <Card.Body>
                <Card.Title>Card Example</Card.Title>
                <Card.Text>This is a card component from bootstrap</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Form className="mb-md-3">
              <Form.Group className="mb-0" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item active>Test</Breadcrumb.Item>
        </Breadcrumb>
        <Alert>This is a not a button</Alert>
        <Button className="text-center">Test Button</Button>
      </Container>
    </div>
  );
}

export default App;
