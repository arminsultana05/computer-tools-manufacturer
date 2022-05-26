import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../firebase.init';



const Header = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
    }
    const menu = <>
        <li ><NavLink to='/' className="rounded-xl" >Home</NavLink></li>

        {/* <li><NavLink to='/purchase/:purchaseId' className="rounded-xl">Purchase</NavLink></li> */}
        {
            user && <li><NavLink to='/dashbord' className="rounded-xl">Dashbord</NavLink></li>
        }
         <li><NavLink to='/about' className="rounded-xl">My Portfolio</NavLink></li>
         <li><NavLink to='/blogs' className="rounded-xl">Blogs
         </NavLink></li>
         {
            user && <li><button className="rounded-full bg-gray-500 text-white">{user.displayName}</button></li>
        }

        <li>{user ? <button onClick={logOut} className='btn btn-ghost rounded-xl'>Sign Out</button> : <NavLink to='/login' className="rounded-xl">LogIn</NavLink>}</li>
    </>
    return (

        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full navbar bg-base-200 lg:px-20">
                        <div className="flex-1 px-2  text-primary text-2xl font-semibold">Computer Parts Manufacturers</div>
                        <div className="flex-none lg:hidden">
                            <label for="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal gap-x-2 ">
                                {/* <!-- Navbar menu content here --> */}
                                {
                                    menu
                                }
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    {
                        children
                    }
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 gap-x-2">
                        {/* <!-- Sidebar content here --> */}
                        {
                            menu
                        }

                    </ul>

                </div>
               
            </div>
            

            
        </div>
    );
};

export default Header;