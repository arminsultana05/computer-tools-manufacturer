import React from 'react';

const UserRow = ({ user,index}) => {
    const {email}=user
    return (

        <tr>
            <th>{index+1}</th>
            <td>{email}</td>
            <td><button class="btn btn-primary btn-sm">Add Admin</button></td>
            <td><button class="btn btn-primary btn-sm">Remove Admin</button></td>
        </tr>

    );
};

export default UserRow;