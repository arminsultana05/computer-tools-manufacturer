import React from 'react';
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import Footer from '../Shared/Footer';


const Dashbord = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content ">
            <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden ">Dashbord</label>
                <h1 className='text-5xl text-green-600'>WELCOME TO YOUR DASHBORD</h1>
                {/* <!-- Page content here --> */}
              
             
              
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-green-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashbord' className="rounded-xl">My Orders</Link></li>
                    <li><Link to='/dashbord/rivew' className="rounded-xl">User Reviews</Link></li>
                    <li><Link to='/dashbord/profile' className="rounded-xl">User Profile</Link></li>
                    <li><Link to='/dashbord/makeadmin' className="rounded-xl">Make Admin</Link></li>
                    <li><Link to='/dashbord/manageproducts' className="rounded-xl">Mnanage Products</Link></li>
                    <li><Link to='/dashbord/allorders' className="rounded-xl">Manage All Orders</Link></li>
                    <li><Link to='/dashbord/addproducts' className="rounded-xl">Add Produtcs</Link></li>
                </ul>

            </div>
           
          
        </div>
        
    );
};

export default Dashbord;