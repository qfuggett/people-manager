import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import User from './User';


const UserTable = () => {

    const [userData, setUserData] = useState();
    
    useEffect(() => {
        fetch('/allusers')
        .then(response => response.json())
            .then((data) => setUserData(data))
    }, [])

    const holdUser = []
    for (let user in userData) {
        holdUser.push(
            <User key={userData[user].user_id} id={userData[user].user_id} name={userData[user].name} email={userData[user].email} birthday={userData[user].birthday} zip={userData[user].zip_code} />
        )
        }
                    
    
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Birthday</th>
                    <th>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {holdUser}
                </tbody>
                </Table>
        </div>
    )
}

export default UserTable;