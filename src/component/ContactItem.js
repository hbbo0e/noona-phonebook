import React from "react"
import { Row, Col, Form} from 'react-bootstrap'
import ContactList from "./ContactList"

const ContactItem = (item) => {
  return (
    <Row>
        <Col lg={1}>
            <img width={50}
             src="https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI="/>
        </Col>
        <Col lg={11}>
            <div> {item.name} </div>
            <div> {item.phoneNumber} </div>
        </Col>
    </Row>
  )
}
export default ContactItem