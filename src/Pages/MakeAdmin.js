import React, { useEffect, useState } from 'react';
import { useQuery, QueryClientProvider, QueryClient } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user',{
            method:'GET',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    // if(isLoading){
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h1>All users{users.length}</h1>
            <div class="overflow-x-auto w-4/5 mx-auto">
                <table class="table w-full text-center ">
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