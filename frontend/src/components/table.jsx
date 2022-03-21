import React, { useEffect, useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Table from 'react-bootstrap/Table'


const UserTable = () => {

    const [userData, setUserData] = useState();
    
    useEffect(() => {
        fetch('/allusers')
        .then(response => response.json())
        .then((data) => setUserData(data))
    }, [])
    // userData[0]['birthday']
    
    console.log("table", userData)
    return (
        <div>
            <h2>User Information Table</h2>
        </div>
    )
}

export default UserTable;