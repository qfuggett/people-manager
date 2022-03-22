import React from 'react';
import Table from 'react-bootstrap/Table';



const UserTable = (props) => {
           
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
                    {props.holdUser}
                </tbody>
            </Table>
        </div>
    )
}

export default UserTable;