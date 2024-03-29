import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';


const SearchBox = () => {
  return (
    <Row>
        <Col>
            <Form.Control type="text" placeholder="Search Name" />
        </Col>
        <Col>
            <Button> Search </Button>
        </Col>
    </Row>
  )
}
export default SearchBox