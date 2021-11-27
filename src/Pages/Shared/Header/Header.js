import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import header from '../../../images/logo.png'
const Header = () => {
    // const cartIcon = <FontAwesomeIcon icon={faBaby} />
    const { user } = useAuth();

    return (
        <div className="mx-0 p-2 bg-gray-100">
            <div className=" px-5">
                <img src={header} alt="" />
            </div>
            <div className="flex justify-end gap-24  text-justify text-gray-600 font-mono text-xl  font-semibold">

                <Link to="/" className="px-5 hover:text-red-500">Home</Link>
                <Link to="/explore" className="hover:text-red-500">Explore</Link>
                {
                    user?.email ?
                        <NavLink className="no-underline" to="/dashboard">
                            <button>Dashboard</button>
                        </NavLink>
                        :
                        <NavLink className="no-underline" to="/login">
                            <button>Login</button>
                            {/* <p>Signed in as: <a href="#login"> {user.displayName}</a></p> */}
                        </NavLink>



                }

            </div>

        </div>
    );
};

export default Header;