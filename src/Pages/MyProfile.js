import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const handlePlaceOrder = event => {
        event.preventDefault()
        const orders = {
            email: user.email,
            name: user.displayName,
            address: event.target.address.value,
            phone: event.target.phone.value,
            education:event.target.education.value,
           location:event.target.location.value,
        }
        axios.post('http://localhost:5000/user', orders)
            .then(response => {
                console.log(response);
            })
    }
    return (
        <div>
           <div className="text-center h-50 mb-6">
                <h1 className='mb-2 text-2xl font-semibold'>YOUR INFORMATION</h1>
                <form onSubmit={handlePlaceOrder} >
                    
                    <input className='w-full lg:w-2/5 border border-green-900 p-1 mt-5 rounded-xl ' type="text" name="name" value={user?.displayName} placeholder='name' id="" readOnly />
                    <br />
                    <input className='w-full lg:w-2/5 border border-green-900 p-1 mt-5 rounded-xl' type="email" name="email" value={user?.email} placeholder='email' id="" readOnly disabled />
                    <br />
                    <input className='w-full lg:w-2/5 border border-green-900 p-1 mt-5 rounded-xl' type="text" name="address" placeholder='address' id="" required />
                    <br />
                    <input className='w-full lg:w-2/5 border border-green-900 p-1 mt-5 rounded-xl' type="text" name="phone" placeholder='phone' id="" />
                    <br />
                    <input className='w-full lg:w-2/5 border border-green-900 p-1 mt-5 rounded-xl' type="text" name="education" placeholder='education' id="" />
                    <br />
                    <input className='w-full lg:w-2/5 border border-green-900 p-1 mt-5 rounded-xl' type="text" name="location" placeholder='location' id="" />
                    <br />
                    <input className='bg-green-600 w-full lg:w-2/5 mt-2 p-2 mt-5 rounded-xl text-white' type="submit" value="Place Your Information" />
                </form>

            </div>

            
        </div>
    );
};

export default MyProfile;