import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import useAdmin from '../CustomHooks/useAdmin';
import auth from '../firebase.init';
import Footer from '../Shared/Footer';


const Dashbord = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    return (
        <>
            <div className="drawer drawer-mobile h-screen ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
                <div className="drawer-content ">
                    <label for="my-drawer-2" className="btn btn-primary drawer-button mb-5 lg:hidden ">Dashbord</label>
                 
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-green-100 text-base-content">
                        {
                            admin && <>
                                <li><Link to='/dashbord/makeadmin' className="rounded-xl">Make Admin</Link></li>
                                <li><Link to='/dashbord/manageproducts' className="rounded-xl">Mnanage Products</Link></li>
                                <li><Link to='/dashbord/allorders' className="rounded-xl">Manage All Orders</Link></li>
                                <li><Link to='/dashbord/addproducts' className="rounded-xl">Add Produtcs</Link></li>
                                <li><Link to='/dashbord/profile' className="rounded-xl">User Profile</Link></li>

                            </>


                        }
                        {
                            !admin && <> <li><Link to='/dashbord/order' className="rounded-xl">My Orders</Link></li>
                                <li><Link to='/dashbord/rivew' className="rounded-xl">User Reviews</Link></li>
                                <li><Link to='/dashbord/profile' className="rounded-xl">User Profile</Link></li></>
                        }

                    </ul>
                </div>

            </div>
           
               <Footer></Footer>
          
        </>
        

    );
};

export default Dashbord;