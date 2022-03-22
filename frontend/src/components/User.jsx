import React, { useContext } from 'react';
import { Button } from "react-bootstrap";
import { UseUserContext } from "../App";

export default function User(props) {

    const { userData, setUserData } = useContext(UseUserContext);

    function updateUser(e) {
        e.preventDefault();
        console.log("update user edit button clicked")
        
        
    }

    function deleteUser() {
        console.log(props.id, props.name, props.email, props.zip)
        const user_id = props.id

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