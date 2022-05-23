import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';
import Footer from './Footer';


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
         <li><NavLink to='/about' className="rounded-xl">About</NavLink></li>
         <li><NavLink to='/blogs' className="rounded-xl">Blogs
         </NavLink></li>

        <li>{user ? <button onClick={logOut} className='btn btn-ghost rounded-xl'>Sign Out</button> : <NavLink to='/login' className="rounded-xl">LogIn</NavLink>}</li>
    </>
    return (

        <div>
            <div class="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div class="w-full navbar bg-base-200 lg:px-20">
                        <div class="flex-1 px-2  text-primary text-2xl font-semibold">Computer Parts Manufacturers</div>
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal gap-x-2 ">
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
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 gap-x-2">
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