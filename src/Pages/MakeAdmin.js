import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    // const {data: users,isLoading} = useQuery('users',()=>fetch('http://localhost:5000/user',{
    //     method:'GET',
    //     headers:{
    //                     authorization:`Bearer ${localStorage.getItem('accessToken')}`
    //                 }

    // }).then(res=>res.json()))
    // if(isLoading){
    //     return <Loading></Loading>
    // }
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user',{
            method:'GET',
            // headers:{
            //     // 'content-tyoe':'application/json',
            //     authorization:`Bearer ${localStorage.getItem('accessToken')}`
            // }

        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    
    return (
        <div>
            <h1>All users{users.length}</h1>
            <div className="overflow-x-auto w-4/5 mx-auto">
                <table className="table w-full text-center ">
                    {/* <!-- head --> */}
                    <thead className='text-primary'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                          users.map((user,index)=> <UserRow
                          key={user._id}
                          index={index}
                          user={user}></UserRow>)
                      }
                       
                       
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MakeAdmin;