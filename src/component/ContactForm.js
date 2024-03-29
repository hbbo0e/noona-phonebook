import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

function ContactForm() {

  const [name, setName] = useState(' ');
  const [phnoeNumber, setphnoeNumber] = useState(0);
  const dispatch = useDispatch();

  const addContact=(event)=>{
    event.preventDefault(); // 페이지 새로고침을 막아준다.
    // store 에 값을 보내기 위해서 useDispatch 사용
    dispatch({type : "ADD_CONTACT", payload : {name, phnoeNumber}})
  }
  // action 이 완료되었다 --> reducer 로 이동

  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label> Name </Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(event)=>{setName(event.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label> Contact </Form.Label>
        <Form.Control type="number" placeholder="Enter Contact" onChange = {(event)=>{setphnoeNumber(event.target.value)}}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default ContactForm;