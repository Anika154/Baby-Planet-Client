import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import '../../Login/Login/Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        // if (user.email) {
        //     alert('Login Successfully!')
        // }
        e.preventDefault();
    }
    return (
        <div className="py-44 w-full min-h-full image " >
            <div>
                <h3 className="font-medium text-green-500 text-5xl mb-5">Please Login</h3>
            </div>
            <form className="flex flex-col w-6/12 mx-auto items-center" onSubmit={handleLoginSubmit}>
                <input name="email" className="px-12 py-1  text-black text-lg my-3 border-2 border-indigo-700 rounded-lg text-center  border-none" onChange={handleOnChange} type="email" placeholder="Email" />
                <input name="password" className="px-12 py-1 text-black text-lg my-1 border-2 border-indigo-700 rounded-lg text-center border-none" onChange={handleOnChange} type="password" placeholder="Password" />
                <input className="text-center px-32 py-2 font-bold bg-green-400 text-white text-lg  my-5 hover:bg-indigo-400 rounded-3xl" type="submit" value="Login" />
                <NavLink to="/register">
                    <button className="text-indigo-700 text-lg " >New User? Please Registration</button>
                </NavLink>
                {
                    isLoading &&
                    <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-700"></div>
                    </div>
                }
                {authError &&
                    <p>{authError}</p>
                }

            </form>
        </div>
    );
};

export default Login;