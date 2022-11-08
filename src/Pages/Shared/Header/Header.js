import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import logo from '../../../images/imgonline-com-ua-resize-3P4Vn14urWi2ErU.jpg';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogOut = () => {
        logout()
            .then()
            .catch()
    }
    return (
        <div className="navbar bg-black mb-12 mt-5 rounded-xl">
            <div className="navbar-start ">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 ">
                        <li><a href='/'>Home</a></li>

                        <li>

                        </li>
                    </ul>
                </div>
                <Link href='/' className="btn btn-ghost normal-case text-xl"><img src={logo} alt='' /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a href='/'>Home</a></li>

                    <li><a href='/'>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <li>
                    {user?.photoURL ?
                        <Image
                            style={{ height: '40px' }}
                            roundedCircle
                            src={user?.photoURL}>
                        </Image>
                        : <FaUser></FaUser>
                    }

                    {
                        user?.uid ?
                            <>
                                <span>{user?.displayName}</span>
                                <button className="btn btn-outline btn-warning font-semibold" onClick={handleLogOut}>Logout</button>
                            </>
                            :
                            <>
                                <Link to='/login'>Login</Link>
                                <Link to='/signup'>Signup</Link>
                            </>
                    }
                </li>

            </div>
        </div>
    );
};

export default Header;