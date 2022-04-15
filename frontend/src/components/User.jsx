import React from 'react';
import { Button } from "react-bootstrap";

export default function User(props) {
    console.log("user")

    function updateUser(e) {
        e.preventDefault();
        console.log("USER", props.id, props.name, props.email, props.zip)
        
        
    }

    function deleteUser(e) {
        e.preventDefault();
        
        fetch(`/user/{ user_id }`, {
            method: 'DELETE',
            body: JSON.stringify({ 'user_id': props.id }),
            headers: {'Content-type': 'application/json'}
        })
    }
    
    return (
            <tr>
            <th>{props.id}</th>  
            <th>{props.name}</th>
            <th>{props.email}</th>
            <th>{props.birthday}</th>
            <th>{props.zip}</th>
            <th><Button onClick={updateUser}>Edit</Button></th>
            <th><Button onClick={deleteUser}>Delete</Button></th>
        </tr> 
    )
}