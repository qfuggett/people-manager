import React, { useState } from 'react';
import { Col, Row, Form, Button } from "react-bootstrap";
import User from './User';



    
const UserForm = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [zipcode, setZipcode] = useState('');

    function createUser(evt) {
        evt.preventDefault();
        console.log(userName, email, birthday, zipcode)
    }

    return (
        <div>
            Enter your information
            <Form onSubmit={(evt) => {createUser(evt)}}>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Control placeholder="Name" value={userName} onChange={(evt)=> setUserName(evt.target.value)}/>
                    </Col>
                    <Col xs="auto">
                        <Form.Control placeholder="Email" value={email} onChange={(evt)=> setEmail(evt.target.value)}/>
                    </Col>
                    <Col xs="auto">
                        <Form.Control type="date" placeholder="Birthday" value={birthday} onChange={(evt)=> setBirthday(evt.target.value)}/>
                    </Col>
                    <Col xs="auto">
                        <Form.Control placeholder="Zip Code" value={zipcode} onChange={(evt)=> setZipcode(evt.target.value)}/>
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" className="mb-2">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )

}

export default UserForm;