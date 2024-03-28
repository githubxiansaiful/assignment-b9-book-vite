import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

    return (
        <>
            <div className="container">
                <div className="navbar px-0 bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="pl-0 btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><NavLink to='/' className={({ isActive }) =>
                                    isActive ? 'menu-active menu-regular' : 'menu-regular'
                                }>
                                    Home
                                </NavLink></li>
                                <li><NavLink to='/listed-books' className={({ isActive }) =>
                                    isActive ? 'menu-active menu-regular' : 'menu-regular'
                                }>
                                    Listed Books
                                </NavLink></li>
                                <li><NavLink to='/pages-to-read' className={({ isActive }) =>
                                    isActive ? 'menu-active menu-regular' : 'menu-regular'
                                }>
                                    Pages To Read
                                </NavLink></li>
                            </ul>
                        </div>
                        <Link to='/'><p className="text-xl font-extrabold">Book Vibe</p></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[16px]">
                            <li><NavLink to='/' className={({ isActive }) =>
                                isActive ? 'menu-active menu-regular' : 'menu-regular'
                            }>
                                Home
                            </NavLink></li>
                            <li><NavLink to='/listed-books' className={({ isActive }) =>
                                isActive ? 'menu-active menu-regular' : 'menu-regular'
                            }>
                                Listed Books
                            </NavLink></li>
                            <li><NavLink to='/pages-to-read' className={({ isActive }) =>
                                isActive ? 'menu-active menu-regular' : 'menu-regular'
                            }>
                                Pages To Read
                            </NavLink></li>
                            <li><NavLink to='/about' className={({ isActive }) =>
                                isActive ? 'menu-active menu-regular' : 'menu-regular'
                            }>
                                About
                            </NavLink></li>
                            <li><NavLink to='/contact' className={({ isActive }) =>
                                isActive ? 'menu-active menu-regular' : 'menu-regular'
                            }>
                                Contact
                            </NavLink></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn bg-[#23BE0A] text-white px-6 mr-3">Sign In</a>
                        <a className="btn bg-[#50B1C9] text-white px-6">Sign Up</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;