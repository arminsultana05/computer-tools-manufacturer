import React from 'react';
import swal from 'sweetalert';

const UserRow = ({ user,index}) => {
    const {email, role}=user;
    const makeAdmin =()=>{
        fetch (`http://localhost:5000/user/admin/${email}`,{

        method:'PUT',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            swal({
                title: "Successfully!",
                text: "MAID AN ADMIN!",
                icon: "success",
                button: "Aww yiss!",
              });
        })
    }
    return (

        <tr>
            <th>{index+1}</th>
            <td>{email}</td>
            <td>{ role!=='admin' &&<button onClick={makeAdmin} class="btn btn-primary btn-sm">Add Admin</button>}</td>
            <td><button class="btn btn-primary btn-sm">Remove Admin</button></td>
        </tr>

    );
};

export default UserRow;