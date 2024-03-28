import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label> Name </Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label> Contact </Form.Label>
        <Form.Control type="number" placeholder="Enter Contact" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default ContactForm;