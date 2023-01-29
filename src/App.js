import './App.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'

function App() {
  return (
    <div className="App">
      <h1>Are you from New York?</h1>
     <Button variant = "success" size = "large">Yur! </Button>

     <Nav activeKey = "/home">
    <Nav.Item>
    <Nav.Link href = "/home">Home</Nav.Link>
    </Nav.Item> 
    <Nav.Item>
    <Nav.Link href = "/about">About</Nav.Link>
    </Nav.Item>
    </Nav>

    <Form>
      <Form.Group controlId = "formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type = "email" placeholder = "Enter email here"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else
        </Form.Text>
      </Form.Group>
    </Form>

    </div>


    
  );
}

export default App;
