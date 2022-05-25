import React from 'react';
import swal from 'sweetalert';

const UserRow = ({ user,index}) => {
    const {email, role}=user;
    const makeAdmin =()=>{
        fetch (`http://localhost:5000/user/admin/${email}`,{

        method:'PUT',
        // headers:{
        //     'content-tyoe':'application/json',

        //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
        // }
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
            <td>{ role!=='admin' &&<button onClick={makeAdmin} className="btn btn-primary btn-sm">Add Admin</button>}</td>
            <td><button className="btn btn-primary btn-sm">Remove Admin</button></td>
        </tr>

    );
};

export default UserRow;