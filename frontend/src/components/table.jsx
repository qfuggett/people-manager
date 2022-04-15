import React, { useState, useEffect, useMemo } from 'react';
import Table from 'react-bootstrap/Table';
import User from './User';

const UserTable = (props) => {
    console.log("table")
    const [userData, setUserData] = useState([]);

    const fetchUsers = () => {
        fetch('/allusers')
          .then(response => response.json())
          .then((data) => setUserData(data))
    }

    const holdUser = []
    for (let user in userData) {
        holdUser.push(
          <User
            // array of user objects formatted for the UserTable with prop data from userData
            key={userData[user].user_id}
            id={userData[user].user_id}
            name={userData[user].name}
            email={userData[user].email}
            birthday={userData[user].birthday}
            zip={userData[user].zip_code} />
        )
    };
    useEffect(() => {
        fetchUsers();
    })

    
    
    return (
        <div>
            <form>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Birthday</th>
                        <th>Zip Code</th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {holdUser}
                    </tbody>
                </Table>
            </form>
        </div>
    )
}

export default UserTable;