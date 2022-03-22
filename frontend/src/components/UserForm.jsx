import React, { useState } from 'react';
import { Col, Row, Form, Button } from "react-bootstrap";
    
export default function UserForm(){
    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [birthday, setBirthday] = useState(null);
    const [zipcode, setZipcode] = useState(null);

    function createUser(evt) {
        evt.preventDefault();
        console.log(userName, email, birthday, zipcode)
        
        fetch('/user', {
            method: 'POST',
            body: JSON.stringify({ 'name': userName, 'email': email, 'birthday': birthday, 'zip_code': zipcode }),
            headers: {'Content-type': 'application/json'}
        })
    }

    return (
        <div>
            Enter your information
            <Form onSubmit={(evt) => {createUser(evt)}}>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Control placeholder="Name" value={userName} onChange={(evt) => setUserName(evt.target.value)} />
                    </Col>
                    <Col xs="auto">
                        <Form.Control placeholder="Email" value={email} onChange={(evt) => setEmail(evt.target.value)} />
                    </Col>
                    <Col xs="auto">
                        <Form.Control type="date" placeholder="Birthday" value={birthday} onChange={(evt) => setBirthday(evt.target.value)} />
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

